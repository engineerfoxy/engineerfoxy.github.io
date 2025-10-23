// Mobile Navigation Toggle
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Contact Form Handling
const contactForm = document.getElementById("contact-form")

contactForm.addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Simple validation
  if (!name || !email || !message) {
    alert("Please fill in all fields.")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.")
    return
  }

  // Simulate form submission
  const submitButton = this.querySelector('button[type="submit"]')
  const originalText = submitButton.textContent

  submitButton.textContent = "Sending..."
  submitButton.disabled = true

  // Simulate API call
  setTimeout(() => {
    alert("Your message has been sent successfully! We'll get back to you soon.")
    this.reset()
    submitButton.textContent = originalText
    submitButton.disabled = false
  }, 2000)
})

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav")
  if (window.scrollY > 50) {
    nav.style.background = "rgba(15, 20, 25, 0.98)"
  } else {
    nav.style.background = "rgba(15, 20, 25, 0.95)"
  }
})

// Add hover effect to project cards (simplified without complex animations)
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px)"
  })

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})

// Add click effect to buttons (simplified ripple effect)
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    // Create simple ripple effect
    const ripple = document.createElement("span")
    const rect = this.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    ripple.style.width = ripple.style.height = size + "px"
    ripple.style.left = x + "px"
    ripple.style.top = y + "px"
    ripple.classList.add("ripple")

    this.appendChild(ripple)

    setTimeout(() => {
      ripple.remove()
    }, 600)
  })
})

// Add CSS for ripple effect
const style = document.createElement("style")
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

window.addEventListener("load", () => {
  const loader = document.createElement("div")
  loader.className = "loader"
  loader.innerHTML = `
        <div class="loader-content">
            <img src="icons/main logo.png" alt="Loading" class="loader-logo">
            <div class="loader-text">Loading...</div>
        </div>
    `

  const loaderStyle = document.createElement("style")
  loaderStyle.textContent = `
        .loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--dark-bg);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            opacity: 1;
            transition: opacity 0.5s ease;
        }
        
        .loader-content {
            text-align: center;
        }
        
        .loader-logo {
            width: 60px;
            height: 60px;
            margin-bottom: 1rem;
            border-radius: 50%;
        }
        
        .loader-text {
            color: var(--text-secondary);
            font-size: 1.125rem;
        }
        
        .loader.fade-out {
            opacity: 0;
            pointer-events: none;
        }
    `

  document.head.appendChild(loaderStyle)
  document.body.appendChild(loader)

  // Hide loader after a short delay
  setTimeout(() => {
    loader.classList.add("fade-out")
    setTimeout(() => {
      loader.remove()
    }, 500)
  }, 1000)
})

console.log("🦊 Hello! Im foxy but in the console!")

// Add simple scroll-to-top functionality
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Show scroll-to-top button when scrolling down
window.addEventListener("scroll", () => {
  const scrollButton = document.getElementById("scroll-to-top")
  if (window.scrollY > 300) {
    if (!scrollButton) {
      const button = document.createElement("button")
      button.id = "scroll-to-top"
      button.innerHTML = "↑"
      button.className = "scroll-to-top-btn"
      button.onclick = scrollToTop
      document.body.appendChild(button)

      // Add styles for scroll-to-top button
      const scrollStyle = document.createElement("style")
      scrollStyle.textContent = `
        .scroll-to-top-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: var(--fox-orange);
          color: white;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          z-index: 1000;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-lg);
        }
        
        .scroll-to-top-btn:hover {
          background: var(--fox-orange-light);
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .scroll-to-top-btn {
            bottom: 1rem;
            right: 1rem;
            width: 45px;
            height: 45px;
          }
        }
      `
      document.head.appendChild(scrollStyle)
    }
  } else {
    const scrollButton = document.getElementById("scroll-to-top")
    if (scrollButton) {
      scrollButton.remove()
    }
  }
})
