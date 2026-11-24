from __future__ import annotations

from pydantic import EmailStr, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ContactInput(SdkBaseModel):
    full_name: str = Field(alias="fullName")
    """Full name; must contain non-whitespace characters."""

    company_name: str = Field(alias="companyName")
    """Company name; must contain non-whitespace characters."""

    email: EmailStr
    """Email address to receive a reply."""

    interested_in: str = Field(alias="interestedIn")
    """Area of interest; must contain non-whitespace characters."""

    telegram: Optional[str] = UNSET
    """Optional Telegram handle."""

    website: Optional[str] = UNSET
    """Optional website."""

    message: Optional[str] = UNSET
    """Optional project or inquiry details."""


class ContactInputDict(TypedDict):
    full_name: str
    company_name: str
    email: EmailStr
    interested_in: str
    telegram: NotRequired[str]
    website: NotRequired[str]
    message: NotRequired[str]
