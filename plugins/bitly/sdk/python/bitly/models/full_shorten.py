from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .deeplink import Deeplink, DeeplinkDict
from .dynamic_routing_rule import DynamicRoutingRule, DynamicRoutingRuleDict


class FullShorten(SdkBaseModel):
    """Either long_url (for new bitlinks) or bitlink_id (for adding keywords to existing bitlinks) must be provided, but
    not both."""

    long_url: Optional[str] = UNSET
    """URL to be shortened. Required when creating new bitlinks. Cannot be used with bitlink_id."""

    domain: str = "bit.ly"
    group_guid: Optional[str] = UNSET
    """Always include a specific group and custom domain in your shorten calls."""

    title: Optional[str] = UNSET
    tags: Optional[list[str]] = UNSET
    deeplinks: Optional[list[Deeplink]] = UNSET
    force_new_link: Optional[bool] = UNSET
    keyword: Optional[str] = UNSET
    """Custom keyword for creating keyword overrides. If provided, creates an override at domain/keyword"""

    bitlink_id: Optional[str] = UNSET
    """Existing bitlink ID to add a keyword override to. Format: domain/hash. Cannot be used with long_url"""

    expiration_at: Optional[str] = UNSET
    """Optional expiration timestamp for the bitlink (e.g., 2025-01-28T14:30:00+0000). Minimum expiration time is 5
    minutes from now and maximum is 1 year."""

    dynamic_routing: Optional[list[DynamicRoutingRule]] = UNSET
    """dynamic routing rules for this bitlink."""


class FullShortenDict(TypedDict):
    long_url: NotRequired[str]
    domain: NotRequired[str]
    group_guid: NotRequired[str]
    title: NotRequired[str]
    tags: NotRequired[list[str]]
    deeplinks: NotRequired[list[DeeplinkDict]]
    force_new_link: NotRequired[bool]
    keyword: NotRequired[str]
    bitlink_id: NotRequired[str]
    expiration_at: NotRequired[str]
    dynamic_routing: NotRequired[list[DynamicRoutingRuleDict]]
