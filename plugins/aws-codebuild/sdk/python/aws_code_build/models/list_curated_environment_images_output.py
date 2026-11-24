from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .environment_platform import EnvironmentPlatform, EnvironmentPlatformDict


class ListCuratedEnvironmentImagesOutput(SdkBaseModel):
    platforms: Optional[list[EnvironmentPlatform]] = UNSET
    """Information about supported platforms for Docker images that are managed by CodeBuild."""


class ListCuratedEnvironmentImagesOutputDict(TypedDict):
    platforms: NotRequired[list[EnvironmentPlatformDict]]
