from __future__ import annotations

from typing import Literal
from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error_detail import ErrorDetail, ErrorDetailDict


class ErrorResponse(SdkBaseModel):
    type_: Literal["list"] = Field(default="list", alias="type")
    """Response type for error responses"""

    correlation_id: UUID = Field(alias="correlationId")
    """Unique identifier for tracking this request"""

    data: list[ErrorDetail]
    """Array containing error details"""


class ErrorResponseDict(TypedDict):
    type_: Literal["list"]
    correlation_id: UUID
    data: list[ErrorDetailDict]
