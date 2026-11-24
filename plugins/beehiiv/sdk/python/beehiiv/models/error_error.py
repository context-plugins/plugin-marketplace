from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error_detail import ErrorDetail, ErrorDetailDict


class ErrorError(SdkBaseModel):
    """The top level error response."""

    status: int
    status_text: str = Field(alias="statusText")
    errors: list[ErrorDetail]


class ErrorErrorDict(TypedDict):
    status: int
    status_text: str
    errors: list[ErrorDetailDict]
