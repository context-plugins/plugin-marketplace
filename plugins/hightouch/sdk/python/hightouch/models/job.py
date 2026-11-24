from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Job(SdkBaseModel):
    id: str


class JobDict(TypedDict):
    id: str
