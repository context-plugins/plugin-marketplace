from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.billing_type2 import BillingType2OrStr


class GoogleCloudApigeeV1AppGroupMonetizationConfig(SdkBaseModel):
    """Monetization configuration for the AppGroup."""

    billing_type: Optional[BillingType2OrStr] = Field(default=UNSET, alias="billingType")
    """Required. Billing type."""


class GoogleCloudApigeeV1AppGroupMonetizationConfigDict(TypedDict):
    billing_type: NotRequired[BillingType2OrStr]
