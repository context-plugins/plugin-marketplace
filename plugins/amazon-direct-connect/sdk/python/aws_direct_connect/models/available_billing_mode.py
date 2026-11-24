from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.billing_mode import BillingModeOrStr


class AvailableBillingMode(SdkBaseModel):
    billing_mode: Optional[BillingModeOrStr] = Field(default=UNSET, alias="billingMode")
    """The billing mode."""

    available_port_speeds: Optional[list[str]] = Field(default=UNSET, alias="availablePortSpeeds")
    """The port speeds available for the billing mode."""

    included_regions: Optional[list[str]] = Field(default=UNSET, alias="includedRegions")
    """The Amazon Web Services Regions included with the billing mode."""


class AvailableBillingModeDict(TypedDict):
    billing_mode: NotRequired[BillingModeOrStr]
    available_port_speeds: NotRequired[list[str]]
    included_regions: NotRequired[list[str]]
