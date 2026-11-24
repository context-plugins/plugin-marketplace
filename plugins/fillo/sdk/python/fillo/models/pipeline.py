from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .stage import Stage, StageDict


class Pipeline(SdkBaseModel):
    id: str
    label: str
    stages: list[Stage]


class PipelineDict(TypedDict):
    id: str
    label: str
    stages: list[StageDict]
