from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ConflictErrorResponse(SdkBaseModel):
    status_code: float = Field(alias="statusCode")
    """Response status code"""

    message: Any
    """Error details"""

    error: str
    """Error type"""

    error_type: str = Field(alias="errorType")


class ConflictErrorResponseDict(TypedDict):
    status_code: float
    message: Any
    error: str
    error_type: str
