from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AgeRange(SdkBaseModel):
    low: Optional[int] = Field(default=UNSET, alias="Low")
    """The lowest estimated age."""

    high: Optional[int] = Field(default=UNSET, alias="High")
    """The highest estimated age."""


class AgeRangeDict(TypedDict):
    low: NotRequired[int]
    high: NotRequired[int]
