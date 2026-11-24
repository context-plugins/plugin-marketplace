from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .deeplink_rule import DeeplinkRule, DeeplinkRuleDict
from .dynamic_routing_rule import DynamicRoutingRule, DynamicRoutingRuleDict


class BitlinkUpdateBody(SdkBaseModel):
    title: Optional[str] = UNSET
    archived: Optional[bool] = UNSET
    tags: Optional[list[str]] = UNSET
    deeplinks: Optional[list[DeeplinkRule]] = UNSET
    long_url: Optional[str] = UNSET
    expiration_at: Optional[str] = UNSET
    """Optional expiration timestamp for the bitlink (e.g., 2025-01-28T14:30:00+0000). Minimum expiration time is 5
    minutes from now and maximum is 1 year."""

    dynamic_routing: Optional[list[DynamicRoutingRule]] = UNSET
    """Dynamic routing rules for this bitlink. Providing this field replaces all existing rules. Send an empty array to
    clear all rules."""


class BitlinkUpdateBodyDict(TypedDict):
    title: NotRequired[str]
    archived: NotRequired[bool]
    tags: NotRequired[list[str]]
    deeplinks: NotRequired[list[DeeplinkRuleDict]]
    long_url: NotRequired[str]
    expiration_at: NotRequired[str]
    dynamic_routing: NotRequired[list[DynamicRoutingRuleDict]]
