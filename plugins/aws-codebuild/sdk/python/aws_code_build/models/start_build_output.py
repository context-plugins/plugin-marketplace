from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .build import Build, BuildDict


class StartBuildOutput(SdkBaseModel):
    build: Optional[Build] = UNSET


class StartBuildOutputDict(TypedDict):
    build: NotRequired[BuildDict]
