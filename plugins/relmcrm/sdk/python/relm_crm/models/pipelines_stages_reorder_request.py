from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PipelinesStagesReorderRequest(SdkBaseModel):
    order: list[str]


class PipelinesStagesReorderRequestDict(TypedDict):
    order: list[str]
