from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .spend_limit_item import SpendLimitItem, SpendLimitItemDict


class SpendLimitListResponse(SdkBaseModel):
    limits: list[SpendLimitItem]


class SpendLimitListResponseDict(TypedDict):
    limits: list[SpendLimitItemDict]
