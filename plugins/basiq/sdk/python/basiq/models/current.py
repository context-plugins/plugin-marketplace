from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Current(SdkBaseModel):
    amount: str
    """Most recent regular income payment amount"""

    date: str
    """Most recent regular income payment date"""

    next_date: str | None = Field(alias="nextDate")
    """Predicted next occurrence for regular income (note: where the pattern has recently ceased there would be no
    predicted next occurrence)"""


class CurrentDict(TypedDict):
    amount: str
    date: str
    next_date: str | None
