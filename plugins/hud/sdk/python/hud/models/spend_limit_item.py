from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.spend_interval import SpendIntervalOrStr
from .enums.spend_limit_action import SpendLimitActionOrStr


class SpendLimitItem(SdkBaseModel):
    """One limit with its current spend-window total.

    API-key and membership limits use their corresponding ID. Team limits have neither; percentage alerts additionally
    identify their parent team limit. ``period_start`` is the window opening (calendar start or last reset);
    ``period_end`` is the next calendar boundary."""

    id: UUID
    api_key_id: UUID
    api_key_name: str
    membership_id: int
    member_name: str
    parent_limit_id: UUID
    threshold_percent: str
    interval: SpendIntervalOrStr
    amount_usd: str
    action: SpendLimitActionOrStr
    enabled: bool
    spend_usd: str
    period_start: str
    period_end: str
    reset_at: str
    editable: bool


class SpendLimitItemDict(TypedDict):
    id: UUID
    api_key_id: UUID
    api_key_name: str
    membership_id: int
    member_name: str
    parent_limit_id: UUID
    threshold_percent: str
    interval: SpendIntervalOrStr
    amount_usd: str
    action: SpendLimitActionOrStr
    enabled: bool
    spend_usd: str
    period_start: str
    period_end: str
    reset_at: str
    editable: bool
