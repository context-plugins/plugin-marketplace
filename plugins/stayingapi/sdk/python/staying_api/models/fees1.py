from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Fees1(SdkBaseModel):
    """DIRECT MODE ONLY, and BEST-EFFORT: fee coverage differs per platform. Airbnb reports cleaning, service and taxes;
    Booking.com reports taxes only; Vrbo and Google report none (all null). Compare on totalPrice — it is present and
    comparable on every platform. Never assume a null fee means the platform does not charge it; it means we could not
    read it."""

    cleaning: float
    service: float
    taxes: float


class Fees1Dict(TypedDict):
    cleaning: float
    service: float
    taxes: float
