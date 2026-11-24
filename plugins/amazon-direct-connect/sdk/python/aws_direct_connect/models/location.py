from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .available_billing_mode import AvailableBillingMode, AvailableBillingModeDict


class Location(SdkBaseModel):
    location_code: Optional[str] = Field(default=UNSET, alias="locationCode")
    """The code for the location."""

    location_name: Optional[str] = Field(default=UNSET, alias="locationName")
    """The name of the location. This includes the name of the colocation partner and the physical site of the
    building."""

    region: Optional[str] = UNSET
    """The Amazon Web Services Region for the location."""

    available_port_speeds: Optional[list[str]] = Field(default=UNSET, alias="availablePortSpeeds")
    """The available port speeds for the location."""

    available_providers: Optional[list[str]] = Field(default=UNSET, alias="availableProviders")
    """The name of the service provider for the location."""

    available_mac_sec_port_speeds: Optional[list[str]] = Field(default=UNSET, alias="availableMacSecPortSpeeds")
    """The available MAC Security (MACsec) port speeds for the location."""

    available_billing_modes: Optional[list[AvailableBillingMode]] = Field(default=UNSET, alias="availableBillingModes")
    """The billing modes available at the location, including the port speeds and Amazon Web Services Regions supported
    by each mode."""


class LocationDict(TypedDict):
    location_code: NotRequired[str]
    location_name: NotRequired[str]
    region: NotRequired[str]
    available_port_speeds: NotRequired[list[str]]
    available_providers: NotRequired[list[str]]
    available_mac_sec_port_speeds: NotRequired[list[str]]
    available_billing_modes: NotRequired[list[AvailableBillingModeDict]]
