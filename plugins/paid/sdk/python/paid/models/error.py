from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .api_error_model import ApiErrorModel, ApiErrorModelDict


class Error(SdkBaseModel):
    """An error response from the Paid API"""

    error: ApiErrorModel
    """An API error response from the Paid API"""


class ErrorDict(TypedDict):
    error: ApiErrorModelDict
