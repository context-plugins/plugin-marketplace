from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Error401MissingBearerError(SdkBaseModel):
    status: Optional[str] = UNSET
    error_type: Optional[str] = Field(default=UNSET, alias="errorType")
    error: Optional[str] = UNSET


class Error401MissingBearerErrorDict(TypedDict):
    status: NotRequired[str]
    error_type: NotRequired[str]
    error: NotRequired[str]
