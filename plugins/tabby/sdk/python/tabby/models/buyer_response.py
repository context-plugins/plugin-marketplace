from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, OptionalNullable, SdkBaseModel


class BuyerResponse(SdkBaseModel):
    """Customer information"""

    name: str | None
    """Customer’s full name."""

    email: EmailStr | None
    """Customer’s email address."""

    phone: str | None
    """Customer’s phone number. This must be a valid mobile phone where the consumer can receive text messages. The
    accepted phone masks are - ``500000001``, ``0500000001``, ``+971500000001``, ``971500000001``."""

    dob: OptionalNullable[Date] = UNSET
    """Customer's date of birth; format is YYYY-MM-DD."""


class BuyerResponseDict(TypedDict):
    name: str | None
    email: EmailStr | None
    phone: str | None
    dob: NotRequired[Date | None]
