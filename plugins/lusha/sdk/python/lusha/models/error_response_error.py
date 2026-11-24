from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorResponseError(SdkBaseModel):
    status_code: int = Field(alias="statusCode")
    """HTTP status code"""

    message: str
    """Error message"""

    errors: Optional[list[str]] = UNSET
    """Detailed error messages (optional, only for validation errors)"""


class ErrorResponseErrorDict(TypedDict):
    status_code: int
    message: str
    errors: NotRequired[list[str]]
