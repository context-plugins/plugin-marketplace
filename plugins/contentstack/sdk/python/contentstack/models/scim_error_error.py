from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ScimErrorError(SdkBaseModel):
    """A SCIM 2.0 error response."""

    schemas: Optional[list[str]] = UNSET
    """SCIM schema URN for error responses."""

    status: Optional[str] = UNSET
    """HTTP status code as a string."""

    detail: Optional[str] = UNSET
    """Human-readable description of the error."""


class ScimErrorErrorDict(TypedDict):
    schemas: NotRequired[list[str]]
    status: NotRequired[str]
    detail: NotRequired[str]
