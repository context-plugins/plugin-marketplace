from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProcessProperty(SdkBaseModel):
    name: Optional[str] = UNSET
    """Property name."""

    value: Optional[str] = UNSET
    """Property value."""


class ProcessPropertyDict(TypedDict):
    name: NotRequired[str]
    value: NotRequired[str]
