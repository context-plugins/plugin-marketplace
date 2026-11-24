from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class CreateVariableRequest(SdkBaseModel):
    """Parameters for creating a project variable."""

    name: str
    """Display name for the variable."""

    key: str
    """Machine-readable key for the variable."""

    value: str
    """Value to store in the variable."""

    is_secret: bool = False
    """Set to true to mark the variable as a secret."""


class CreateVariableRequestDict(TypedDict):
    name: str
    key: str
    value: str
    is_secret: NotRequired[bool]
