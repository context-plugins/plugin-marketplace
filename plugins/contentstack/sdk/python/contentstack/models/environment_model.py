from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .url import Url, UrlDict


class EnvironmentModel(SdkBaseModel):
    """A deployment environment for publishing content."""

    uid: Optional[str] = UNSET
    """Unique identifier of the environment."""

    name: Optional[str] = UNSET
    """Display name of the environment."""

    urls: Optional[list[Url]] = UNSET
    """List of URL configurations for the environment."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the environment was created."""


class EnvironmentModelDict(TypedDict):
    uid: NotRequired[str]
    name: NotRequired[str]
    urls: NotRequired[list[UrlDict]]
    created_at: NotRequired[RFC3339DateTime]
