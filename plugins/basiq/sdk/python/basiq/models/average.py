from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Average(SdkBaseModel):
    transaction: Optional[str] = UNSET
    """Average transaction amount"""

    month: Optional[str] = UNSET
    """Average monthly amount"""

    median_transaction: Optional[str] = Field(default=UNSET, alias="medianTransaction")
    """Median transaction amount"""

    median_month: Optional[str] = Field(default=UNSET, alias="medianMonth")
    """Median monthly amount"""

    ongoing_month: Optional[str] = Field(default=UNSET, alias="ongoingMonth")
    """Ongoing month's average amount"""


class AverageDict(TypedDict):
    transaction: NotRequired[str]
    month: NotRequired[str]
    median_transaction: NotRequired[str]
    median_month: NotRequired[str]
    ongoing_month: NotRequired[str]
