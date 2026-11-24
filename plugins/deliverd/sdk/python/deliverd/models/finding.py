from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Finding(SdkBaseModel):
    kind: str
    label: str
    start: float
    end: float


class FindingDict(TypedDict):
    kind: str
    label: str
    start: float
    end: float
