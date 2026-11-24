from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ChangeHistory(SdkBaseModel):
    """Amount classified as spent that month (repeated each month of data)"""

    amount: str
    """Amount of expense that period"""

    date: str
    """Month expense relates"""


class ChangeHistoryDict(TypedDict):
    amount: str
    date: str
