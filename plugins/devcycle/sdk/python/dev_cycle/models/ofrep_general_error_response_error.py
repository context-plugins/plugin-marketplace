from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OfrepGeneralErrorResponseError(SdkBaseModel):
    """A general error response from the service"""

    error_details: Optional[str] = Field(default=UNSET, alias="errorDetails")
    """An error description for logging or other needs"""


class OfrepGeneralErrorResponseErrorDict(TypedDict):
    error_details: NotRequired[str]
