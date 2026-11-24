from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .version import Version, VersionDict


class SupportedVersions(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    versions: list[Version]
    """List of supported API versions."""


class SupportedVersionsDict(TypedDict):
    versions: list[VersionDict]
