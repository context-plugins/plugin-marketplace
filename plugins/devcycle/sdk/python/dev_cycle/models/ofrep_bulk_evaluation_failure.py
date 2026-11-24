from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OfrepBulkEvaluationFailure(SdkBaseModel):
    """Bulk evaluation failure response"""

    error_code: str = Field(alias="errorCode")
    """An appropriate code specific to the bulk evaluation error. See
    https://openfeature.dev/specification/types#error-code"""

    error_details: Optional[str] = Field(default=UNSET, alias="errorDetails")
    """Optional error details description for logging or other needs"""


class OfrepBulkEvaluationFailureDict(TypedDict):
    error_code: str
    error_details: NotRequired[str]
