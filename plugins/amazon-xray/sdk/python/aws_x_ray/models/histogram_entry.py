from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class HistogramEntry(SdkBaseModel):
    value: Optional[float] = Field(default=UNSET, alias="Value")
    """The value of the entry."""

    count: Optional[int] = Field(default=UNSET, alias="Count")
    """The prevalence of the entry."""


class HistogramEntryDict(TypedDict):
    value: NotRequired[float]
    count: NotRequired[int]
