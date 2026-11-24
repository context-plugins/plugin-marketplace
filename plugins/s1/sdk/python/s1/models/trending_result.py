from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class TrendingResult(SdkBaseModel):
    title: str
    url: str
    description: OptionalNullable[str] = UNSET


class TrendingResultDict(TypedDict):
    title: str
    url: str
    description: NotRequired[str | None]
