from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UnmodifiedShortStalenessDto(SdkBaseModel):
    enabled: bool


class UnmodifiedShortStalenessDtoDict(TypedDict):
    enabled: bool
