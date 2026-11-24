from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SourceInput(SdkBaseModel):
    """Input for creating a data source."""

    name: str
    """Display name for the source."""

    description: Optional[str] = UNSET
    """Optional description of the source system."""


class SourceInputDict(TypedDict):
    name: str
    description: NotRequired[str]
