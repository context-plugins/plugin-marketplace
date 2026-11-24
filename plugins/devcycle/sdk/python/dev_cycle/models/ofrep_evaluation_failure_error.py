from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.error_code import ErrorCodeOrStr


class OfrepEvaluationFailureError(SdkBaseModel):
    """Flag evaluation failure response"""

    key: str
    """Feature flag key"""

    error_code: ErrorCodeOrStr = Field(alias="errorCode")
    """OpenFeature compatible error code. See https://openfeature.dev/specification/types#error-code"""

    error_details: Optional[str] = Field(default=UNSET, alias="errorDetails")
    """An error description for logging or other needs"""


class OfrepEvaluationFailureErrorDict(TypedDict):
    key: str
    error_code: ErrorCodeOrStr
    error_details: NotRequired[str]
