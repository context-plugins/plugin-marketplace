from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiErrorModel(SdkBaseModel):
    """An API error response from the Paid API"""

    message: Optional[str] = UNSET
    """A human-readable message providing more details about the error."""

    code: Optional[str] = UNSET
    details: Optional[str] = UNSET


class ApiErrorModelDict(TypedDict):
    message: NotRequired[str]
    code: NotRequired[str]
    details: NotRequired[str]
