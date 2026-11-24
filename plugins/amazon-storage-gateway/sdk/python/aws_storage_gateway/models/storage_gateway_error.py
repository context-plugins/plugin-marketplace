from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.error_code import ErrorCodeOrStr


class StorageGatewayError(SdkBaseModel):
    error_code: Optional[ErrorCodeOrStr] = Field(default=UNSET, alias="errorCode")
    """Additional information about the error."""

    error_details: Optional[dict[str, str]] = Field(default=UNSET, alias="errorDetails")
    """Human-readable text that provides detail about the error that occurred."""


class StorageGatewayErrorDict(TypedDict):
    error_code: NotRequired[ErrorCodeOrStr]
    error_details: NotRequired[dict[str, str]]
