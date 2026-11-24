from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ErrorResponseUiPathTestManagerProjectsApi(SdkBaseModel):
    """Standard error response body"""

    message: Optional[str] = UNSET
    """Human-readable error message"""

    error_code: Optional[str] = Field(default=UNSET, alias="errorCode")
    """Error code identifier"""


class ErrorResponseUiPathTestManagerProjectsApiDict(TypedDict):
    message: NotRequired[str]
    error_code: NotRequired[str]
