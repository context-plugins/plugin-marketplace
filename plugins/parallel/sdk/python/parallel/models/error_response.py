from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .error2 import Error2, Error2Dict


class ErrorResponse(SdkBaseModel):
    """Response object used for non-200 status codes."""

    type_: Literal["error"] = Field(default="error", alias="type")
    """Always 'error'."""

    error: Error2
    """Error."""


class ErrorResponseDict(TypedDict):
    type_: Literal["error"]
    error: Error2Dict
