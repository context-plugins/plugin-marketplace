from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PathOverride(SdkBaseModel):
    """PathOverride. Path message defines path override for HTTP targets."""

    path: Optional[str] = UNSET
    """The URI path (e.g., /users/1234). Default is an empty string."""


class PathOverrideDict(TypedDict):
    path: NotRequired[str]
