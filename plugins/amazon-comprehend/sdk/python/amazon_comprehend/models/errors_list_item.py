from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.error_code import ErrorCodeOrStr


class ErrorsListItem(SdkBaseModel):
    page: Optional[int] = Field(default=UNSET, alias="Page")
    """Page number where the error occurred."""

    error_code: Optional[ErrorCodeOrStr] = Field(default=UNSET, alias="ErrorCode")
    """Error code for the cause of the error."""

    error_message: Optional[str] = Field(default=UNSET, alias="ErrorMessage")
    """Text message explaining the reason for the error."""


class ErrorsListItemDict(TypedDict):
    page: NotRequired[int]
    error_code: NotRequired[ErrorCodeOrStr]
    error_message: NotRequired[str]
