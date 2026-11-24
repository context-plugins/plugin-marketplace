from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data import Data, DataDict


class ErrorResponseError(SdkBaseModel):
    status_code: int = Field(alias="statusCode")
    """HTTP status code."""

    status_message: str = Field(alias="statusMessage")
    """HTTP status text."""

    message: str
    """Short error summary (same as statusMessage for most errors)."""

    data: Optional[Data] = UNSET
    """Domain error payload set by the handler."""


class ErrorResponseErrorDict(TypedDict):
    status_code: int
    status_message: str
    message: str
    data: NotRequired[DataDict]
