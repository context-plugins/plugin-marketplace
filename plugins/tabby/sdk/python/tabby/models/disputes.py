from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .dispute_no_history import DisputeNoHistory, DisputeNoHistoryDict


class Disputes(SdkBaseModel):
    disputes: list[DisputeNoHistory]
    next_page_token: str


class DisputesDict(TypedDict):
    disputes: list[DisputeNoHistoryDict]
    next_page_token: str
