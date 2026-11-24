from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.spend_interval import SpendIntervalOrStr
from .enums.spend_limit_action import SpendLimitActionOrStr
from .unions.amount_usd import AmountUsd, AmountUsdDict
from .unions.threshold_percent1 import ThresholdPercent1, ThresholdPercent1Dict


class SpendLimitCreateRequest(SdkBaseModel):
    """Create an absolute limit or a percentage alert.

    Set one scope ID for an API-key or membership limit, or neither for a team limit. Percentage alerts set
    ``parent_limit_id`` and ``threshold_percent``; their interval must match the parent and their amount is
    inherited."""

    api_key_id: Optional[UUID] = UNSET
    membership_id: Optional[int] = UNSET
    parent_limit_id: Optional[UUID] = UNSET
    threshold_percent: Optional[ThresholdPercent1] = UNSET
    interval: SpendIntervalOrStr
    amount_usd: Optional[AmountUsd] = UNSET
    action: SpendLimitActionOrStr
    enabled: bool = True


class SpendLimitCreateRequestDict(TypedDict):
    api_key_id: NotRequired[UUID]
    membership_id: NotRequired[int]
    parent_limit_id: NotRequired[UUID]
    threshold_percent: NotRequired[ThresholdPercent1Dict]
    interval: SpendIntervalOrStr
    amount_usd: NotRequired[AmountUsdDict]
    action: SpendLimitActionOrStr
    enabled: NotRequired[bool]
