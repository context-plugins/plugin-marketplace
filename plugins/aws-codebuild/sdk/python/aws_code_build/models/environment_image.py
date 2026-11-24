from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EnvironmentImage(SdkBaseModel):
    name: Optional[str] = UNSET
    """The name of the Docker image."""

    description: Optional[str] = UNSET
    """The description of the Docker image."""

    versions: Optional[list[str]] = UNSET
    """A list of environment image versions."""


class EnvironmentImageDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    versions: NotRequired[list[str]]
