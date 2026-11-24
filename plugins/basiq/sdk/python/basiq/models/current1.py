from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Current1(SdkBaseModel):
    amount: str
    """Most recent irregular income payment amount"""

    date: str
    """Most recent irregular income payment date"""


class Current1Dict(TypedDict):
    amount: str
    date: str
