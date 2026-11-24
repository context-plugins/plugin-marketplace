from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorResponseError(SdkBaseModel):
    status_code: Optional[float] = Field(default=UNSET, alias="statusCode")
    """Error response status code"""

    message: str
    """Error message"""

    data: Optional[Any] = UNSET
    """Additional error information detailing the error reasoning"""


class ErrorResponseErrorDict(TypedDict):
    status_code: NotRequired[float]
    message: str
    data: NotRequired[Any]
