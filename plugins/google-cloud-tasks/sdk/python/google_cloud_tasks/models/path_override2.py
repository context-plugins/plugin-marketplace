from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PathOverride2(SdkBaseModel):
    """URI path. When specified, replaces the existing path of the task URL. Setting the path value to an empty string
    clears the URI path segment."""

    path: Optional[str] = UNSET
    """The URI path (e.g., /users/1234). Default is an empty string."""


class PathOverride2Dict(TypedDict):
    path: NotRequired[str]
