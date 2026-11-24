from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BatchItemError(SdkBaseModel):
    index: Optional[int] = Field(default=UNSET, alias="Index")
    """The zero-based index of the document in the input list."""

    error_code: Optional[str] = Field(default=UNSET, alias="ErrorCode")
    """The numeric error code of the error."""

    error_message: Optional[str] = Field(default=UNSET, alias="ErrorMessage")
    """A text description of the error."""


class BatchItemErrorDict(TypedDict):
    index: NotRequired[int]
    error_code: NotRequired[str]
    error_message: NotRequired[str]
