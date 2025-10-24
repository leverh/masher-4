 // Simple animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.feature-card, .code-example').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s ease';
            observer.observe(el);
        });

        // Copy code button
        document.querySelector('.copy-btn')?.addEventListener('click', function() {
            const codeText = document.querySelector('.code-body').innerText;
            navigator.clipboard.writeText(codeText);
            this.textContent = 'Copied!';
            setTimeout(() => {
                this.textContent = 'Copy Code';
            }, 2000);
        });