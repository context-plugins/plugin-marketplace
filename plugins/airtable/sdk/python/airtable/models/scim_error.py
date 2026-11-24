from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ScimError(SdkBaseModel):
    """A SCIM 2.0 error response."""

    schemas: Optional[list[str]] = UNSET
    detail: Optional[str] = UNSET
    """A human-readable description of the error."""

    status: Optional[str] = UNSET
    """The HTTP status code as a string."""

    scim_type: Optional[str] = Field(default=UNSET, alias="scimType")
    """The SCIM error type."""


class ScimErrorDict(TypedDict):
    schemas: NotRequired[list[str]]
    detail: NotRequired[str]
    status: NotRequired[str]
    scim_type: NotRequired[str]
