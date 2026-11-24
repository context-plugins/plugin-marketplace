from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.billing_type1 import BillingType1OrStr


class GoogleCloudApigeeV1DeveloperMonetizationConfig(SdkBaseModel):
    """Monetization configuration for the developer."""

    billing_type: Optional[BillingType1OrStr] = Field(default=UNSET, alias="billingType")
    """Billing type."""


class GoogleCloudApigeeV1DeveloperMonetizationConfigDict(TypedDict):
    billing_type: NotRequired[BillingType1OrStr]
