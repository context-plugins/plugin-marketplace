from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class Buyer(SdkBaseModel):
    """Customer information"""

    name: str
    """Customer’s full name."""

    email: EmailStr
    """Customer’s email address."""

    phone: str
    """Customer’s phone number. This must be a valid mobile phone where the consumer can receive text messages. The
    accepted phone masks are - ``500000001``, ``0500000001``, ``+971500000001``, ``971500000001``."""

    dob: Optional[Date] = UNSET
    """Customer's date of birth; format is YYYY-MM-DD."""


class BuyerDict(TypedDict):
    name: str
    email: EmailStr
    phone: str
    dob: NotRequired[Date]
