from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error(SdkBaseModel):
    """Represent a user-facing Error."""

    message: Optional[str] = UNSET
    """A message containing more information about the error that occurred."""

    error_time: Optional[str] = Field(default=UNSET, alias="errorTime")
    """The time when the error occurred."""

    details: Optional[dict[str, str]] = UNSET
    """Additional information about the error."""

    error_uuid: Optional[str] = Field(default=UNSET, alias="errorUuid")
    """A unique identifier for this specific error, allowing it to be traced throughout the system in logs and API
    responses."""

    reason: Optional[str] = UNSET
    """A title that explains the reason for the error."""


class ErrorDict(TypedDict):
    message: NotRequired[str]
    error_time: NotRequired[str]
    details: NotRequired[dict[str, str]]
    error_uuid: NotRequired[str]
    reason: NotRequired[str]
