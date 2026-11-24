from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.dynamic_routing_device_enum import DynamicRoutingDeviceEnumOrStr
from .enums.dynamic_routing_platform_enum import DynamicRoutingPlatformEnumOrStr


class DynamicRoutingRule(SdkBaseModel):
    """A dynamic routing rule that redirects traffic to a different destination based on user attributes."""

    long_url: Optional[str] = UNSET
    """The destination URL for requests matching this rule."""

    country_match: Optional[list[str]] = UNSET
    """ISO 3166-1 alpha-2 country codes that trigger this rule (e.g., ["US", "CA"])."""

    country_exclude: Optional[list[str]] = UNSET
    """ISO 3166-1 alpha-2 country codes that must NOT match for this rule to apply."""

    region_match: Optional[list[str]] = UNSET
    """ISO 3166-2 region codes that trigger this rule (e.g., ["US-CA", "CA-ON"])."""

    region_exclude: Optional[list[str]] = UNSET
    """ISO 3166-2 region codes that must NOT match for this rule to apply (e.g., ["US-CA", "CA-ON"])."""

    device_match: Optional[list[DynamicRoutingDeviceEnumOrStr]] = UNSET
    """Device types that trigger this rule (e.g., ["mobile", "tablet"])."""

    device_exclude: Optional[list[DynamicRoutingDeviceEnumOrStr]] = UNSET
    """Device types that must NOT match for this rule to apply."""

    os_match: Optional[list[DynamicRoutingPlatformEnumOrStr]] = UNSET
    """Operating systems that trigger this rule (e.g., ["ios", "android"])."""

    os_exclude: Optional[list[DynamicRoutingPlatformEnumOrStr]] = UNSET
    """Operating systems that must NOT match for this rule to apply."""


class DynamicRoutingRuleDict(TypedDict):
    long_url: NotRequired[str]
    country_match: NotRequired[list[str]]
    country_exclude: NotRequired[list[str]]
    region_match: NotRequired[list[str]]
    region_exclude: NotRequired[list[str]]
    device_match: NotRequired[list[DynamicRoutingDeviceEnumOrStr]]
    device_exclude: NotRequired[list[DynamicRoutingDeviceEnumOrStr]]
    os_match: NotRequired[list[DynamicRoutingPlatformEnumOrStr]]
    os_exclude: NotRequired[list[DynamicRoutingPlatformEnumOrStr]]
