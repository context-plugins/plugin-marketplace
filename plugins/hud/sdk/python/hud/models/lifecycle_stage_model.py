from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LifecycleStageModel(SdkBaseModel):
    key: str
    label: str


class LifecycleStageModelDict(TypedDict):
    key: str
    label: str
