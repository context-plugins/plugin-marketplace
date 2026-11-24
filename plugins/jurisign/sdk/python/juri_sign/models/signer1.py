from __future__ import annotations

from uuid import UUID

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.otp_channel import OtpChannelOrStr
from .enums.status2 import Status2OrStr
from .signature_zone import SignatureZone, SignatureZoneDict


class Signer1(SdkBaseModel):
    id: Optional[UUID] = UNSET
    name: Optional[str] = UNSET
    email: Optional[EmailStr] = UNSET
    status: Optional[Status2OrStr] = UNSET
    otp_channel: Optional[OtpChannelOrStr] = UNSET
    signing_order: Optional[int] = UNSET
    signing_link: Optional[str] = UNSET
    notified_at: OptionalNullable[RFC3339DateTime] = UNSET
    viewed_at: OptionalNullable[RFC3339DateTime] = UNSET
    signed_at: OptionalNullable[RFC3339DateTime] = UNSET
    declined_at: OptionalNullable[RFC3339DateTime] = UNSET
    decline_reason: OptionalNullable[str] = UNSET
    zones: Optional[list[SignatureZone]] = UNSET


class Signer1Dict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    email: NotRequired[EmailStr]
    status: NotRequired[Status2OrStr]
    otp_channel: NotRequired[OtpChannelOrStr]
    signing_order: NotRequired[int]
    signing_link: NotRequired[str]
    notified_at: NotRequired[RFC3339DateTime | None]
    viewed_at: NotRequired[RFC3339DateTime | None]
    signed_at: NotRequired[RFC3339DateTime | None]
    declined_at: NotRequired[RFC3339DateTime | None]
    decline_reason: NotRequired[str | None]
    zones: NotRequired[list[SignatureZoneDict]]
