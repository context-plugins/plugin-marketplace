from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ReleasedStalenessDto(SdkBaseModel):
    enabled: bool


class ReleasedStalenessDtoDict(TypedDict):
    enabled: bool
