from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .phone import Phone, PhoneDict


class Teaser(SdkBaseModel):
    """Preview contact data for the profile"""

    emails: Optional[list[str]] = UNSET
    phones: Optional[list[Phone]] = UNSET
    office_phones: Optional[list[str]] = UNSET
    preview: Optional[list[str]] = UNSET
    is_premium_phone_available: Optional[bool] = UNSET
    personal_emails: Optional[list[str]] = UNSET
    professional_emails: Optional[list[str]] = UNSET


class TeaserDict(TypedDict):
    emails: NotRequired[list[str]]
    phones: NotRequired[list[PhoneDict]]
    office_phones: NotRequired[list[str]]
    preview: NotRequired[list[str]]
    is_premium_phone_available: NotRequired[bool]
    personal_emails: NotRequired[list[str]]
    professional_emails: NotRequired[list[str]]
