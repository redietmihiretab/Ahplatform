// Amde Haymanot Sunday School - UI/UX Pro Max Scripts
document.addEventListener("DOMContentLoaded", () => {
    console.log(
        "%c✝ Amde Haymanot Sunday School | ዓምደ ሃይማኖት ሰ/ት/ቤት ✝",
        "color: #D4AF37; font-size: 15px; font-weight: bold; background: #07080b; padding: 6px 12px; border-radius: 6px; border: 1px solid #D4AF37;"
    );

    // Mobile Toast Feedback System
    const toast = document.getElementById("toast");
    const toastMsg = document.getElementById("toastMsg");
    let toastTimeout = null;

    function showMobileToast(message) {
        if (!toast || !toastMsg) return;

        toastMsg.textContent = message;
        toast.classList.add("show");

        // Subtle haptic feedback for mobile devices if supported
        if (typeof navigator !== "undefined" && navigator.vibrate) {
            try {
                navigator.vibrate(15);
            } catch (e) {
                // Ignore devices without haptics
            }
        }

        if (toastTimeout) {
            clearTimeout(toastTimeout);
        }

        toastTimeout = setTimeout(() => {
            toast.classList.remove("show");
        }, 2200);
    }

    // Touch & Click Feedback for Social Cards
    const linkCards = document.querySelectorAll(".link-card");
    linkCards.forEach(card => {
        card.addEventListener("click", () => {
            const platform = card.getAttribute("data-platform") || "channel";
            showMobileToast(`Opening ${platform}...`);
        });
    });
});
