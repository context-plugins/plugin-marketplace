from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .deeplink_rule import DeeplinkRule, DeeplinkRuleDict
from .dynamic_routing_rule import DynamicRoutingRule, DynamicRoutingRuleDict


class BitlinkUpdate(SdkBaseModel):
    link: Optional[str] = UNSET
    id: Optional[str] = UNSET
    long_url: Optional[str] = UNSET
    title: Optional[str] = UNSET
    archived: Optional[bool] = UNSET
    created_at: Optional[str] = UNSET
    created_by: Optional[str] = UNSET
    client_id: Optional[str] = UNSET
    custom_bitlinks: Optional[list[str]] = UNSET
    """list of previously edited backhalfs for the bitlink - these are in reverse chronological order, with the most
    recently edited backhalf first"""

    tags: Optional[list[str]] = UNSET
    launchpad_ids: Optional[list[str]] = UNSET
    qr_code_ids: Optional[list[str]] = UNSET
    """a list of qr code ids that are associated with this bitlink"""

    deeplinks: Optional[list[DeeplinkRule]] = UNSET
    is_deleted: Optional[bool] = UNSET
    campaign_ids: Optional[list[str]] = UNSET
    expiration_at: Optional[str] = UNSET
    """Optional expiration timestamp for the bitlink (e.g., 2025-01-28T14:30:00+0000)"""

    dynamic_routing: Optional[list[DynamicRoutingRule]] = UNSET
    """Dynamic routing rules for this bitlink. Only present when at least one rule is configured."""


class BitlinkUpdateDict(TypedDict):
    link: NotRequired[str]
    id: NotRequired[str]
    long_url: NotRequired[str]
    title: NotRequired[str]
    archived: NotRequired[bool]
    created_at: NotRequired[str]
    created_by: NotRequired[str]
    client_id: NotRequired[str]
    custom_bitlinks: NotRequired[list[str]]
    tags: NotRequired[list[str]]
    launchpad_ids: NotRequired[list[str]]
    qr_code_ids: NotRequired[list[str]]
    deeplinks: NotRequired[list[DeeplinkRuleDict]]
    is_deleted: NotRequired[bool]
    campaign_ids: NotRequired[list[str]]
    expiration_at: NotRequired[str]
    dynamic_routing: NotRequired[list[DynamicRoutingRuleDict]]
