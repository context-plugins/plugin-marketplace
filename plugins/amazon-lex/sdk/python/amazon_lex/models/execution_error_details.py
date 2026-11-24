from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ExecutionErrorDetails(SdkBaseModel):
    error_code: str = Field(alias="errorCode")
    """The error code for the error."""

    error_message: str = Field(alias="errorMessage")
    """The message describing the error."""


class ExecutionErrorDetailsDict(TypedDict):
    error_code: str
    error_message: str
