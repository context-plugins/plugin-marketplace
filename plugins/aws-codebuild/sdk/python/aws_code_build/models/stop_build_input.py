from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StopBuildInput(SdkBaseModel):
    id: str
    """The ID of the build."""


class StopBuildInputDict(TypedDict):
    id: str
