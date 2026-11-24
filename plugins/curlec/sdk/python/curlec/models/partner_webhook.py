from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity_razorpay_partner_webhooks_api import EntityRazorpayPartnerWebhooksApiOrStr


class PartnerWebhook(SdkBaseModel):
    """A webhook configured for a sub-merchant account via the Partners API. Maximum 30 webhooks per account."""

    id: Optional[str] = UNSET
    """Webhook ID, max 14 characters"""

    entity: Optional[EntityRazorpayPartnerWebhooksApiOrStr] = UNSET
    owner_id: Optional[str] = UNSET
    owner_type: Optional[str] = UNSET
    url: Optional[str] = UNSET
    """HTTPS URL to receive webhook events"""

    alert_email: Optional[str] = UNSET
    secret: Optional[str] = UNSET
    """Shared secret for HMAC verification (write-only)"""

    secret_exists: Optional[bool] = UNSET
    active: Optional[bool] = UNSET
    events: Optional[dict[str, bool]] = UNSET
    """Map of event names to boolean"""

    service: Optional[str] = UNSET
    context: Optional[list[str]] = UNSET
    disabled_at: Optional[int] = UNSET
    created_at: Optional[int] = UNSET
    updated_at: Optional[int] = UNSET


class PartnerWebhookDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayPartnerWebhooksApiOrStr]
    owner_id: NotRequired[str]
    owner_type: NotRequired[str]
    url: NotRequired[str]
    alert_email: NotRequired[str]
    secret: NotRequired[str]
    secret_exists: NotRequired[bool]
    active: NotRequired[bool]
    events: NotRequired[dict[str, bool]]
    service: NotRequired[str]
    context: NotRequired[list[str]]
    disabled_at: NotRequired[int]
    created_at: NotRequired[int]
    updated_at: NotRequired[int]
