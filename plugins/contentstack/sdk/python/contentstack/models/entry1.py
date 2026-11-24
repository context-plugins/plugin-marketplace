from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Entry1(SdkBaseModel):
    """Publish configuration."""

    environments: Optional[list[str]] = UNSET
    """List of environment names to publish to."""

    locales: Optional[list[str]] = UNSET
    """List of locale codes to publish."""


class Entry1Dict(TypedDict):
    environments: NotRequired[list[str]]
    locales: NotRequired[list[str]]
