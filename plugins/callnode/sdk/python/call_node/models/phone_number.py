from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.purchase_source import PurchaseSourceOrStr
from .enums.type3 import Type3OrStr
from .messaging import Messaging, MessagingDict
from .voice import Voice, VoiceDict


class PhoneNumber(SdkBaseModel):
    id: Optional[str] = UNSET
    phone_number: Optional[str] = Field(default=UNSET, alias="phoneNumber")
    """Plus sign followed by 7–15 digits."""

    type_: Optional[Type3OrStr] = Field(default=UNSET, alias="type")
    friendly_name: OptionalNullable[str] = Field(default=UNSET, alias="friendlyName")
    status: Optional[str] = UNSET
    purchase_source: Optional[PurchaseSourceOrStr] = Field(default=UNSET, alias="purchaseSource")
    """How the number was purchased — via the dashboard (``web``) or this API (``api``)."""

    tags: Optional[list[str]] = UNSET
    """Your own labels for the number. Trimmed, de-duplicated case-insensitively, returned on every number, filterable
    on the dashboard. PATCH replaces the whole list; send [] to clear."""

    voice: Optional[Voice] = UNSET
    messaging: Optional[Messaging] = UNSET
    monthly_rate: Optional[float] = Field(default=UNSET, alias="monthlyRate")
    per_minute_rate: Optional[float] = Field(default=UNSET, alias="perMinuteRate")
    included_in_subscription: Optional[bool] = Field(default=UNSET, alias="includedInSubscription")
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")


class PhoneNumberDict(TypedDict):
    id: NotRequired[str]
    phone_number: NotRequired[str]
    type_: NotRequired[Type3OrStr]
    friendly_name: NotRequired[str | None]
    status: NotRequired[str]
    purchase_source: NotRequired[PurchaseSourceOrStr]
    tags: NotRequired[list[str]]
    voice: NotRequired[VoiceDict]
    messaging: NotRequired[MessagingDict]
    monthly_rate: NotRequired[float]
    per_minute_rate: NotRequired[float]
    included_in_subscription: NotRequired[bool]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
