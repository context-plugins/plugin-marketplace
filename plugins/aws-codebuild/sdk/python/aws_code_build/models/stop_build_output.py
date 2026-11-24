from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .build import Build, BuildDict


class StopBuildOutput(SdkBaseModel):
    build: Optional[Build] = UNSET


class StopBuildOutputDict(TypedDict):
    build: NotRequired[BuildDict]
