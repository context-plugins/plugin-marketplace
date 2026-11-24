from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OfrepFlagNotFoundError(SdkBaseModel):
    """Flag not found response"""

    key: str
    """Feature flag key"""

    error_code: Literal["FLAG_NOT_FOUND"] = Field(default="FLAG_NOT_FOUND", alias="errorCode")
    error_details: Optional[str] = Field(default=UNSET, alias="errorDetails")
    """An error description for logging or other needs"""


class OfrepFlagNotFoundErrorDict(TypedDict):
    key: str
    error_code: Literal["FLAG_NOT_FOUND"]
    error_details: NotRequired[str]
