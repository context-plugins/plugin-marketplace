from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Stage(SdkBaseModel):
    id: str
    label: str


class StageDict(TypedDict):
    id: str
    label: str
