from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.otp_channel import OtpChannelOrStr
from .recipient import Recipient, RecipientDict


class BulkCampaignsRequest(SdkBaseModel):
    name: str
    bulk_template_id: UUID
    expiry_hours: int
    otp_channel: OtpChannelOrStr
    message: OptionalNullable[str] = UNSET
    require_selfie: Optional[bool] = UNSET
    recipients: list[Recipient]


class BulkCampaignsRequestDict(TypedDict):
    name: str
    bulk_template_id: UUID
    expiry_hours: int
    otp_channel: OtpChannelOrStr
    message: NotRequired[str | None]
    require_selfie: NotRequired[bool]
    recipients: list[RecipientDict]
