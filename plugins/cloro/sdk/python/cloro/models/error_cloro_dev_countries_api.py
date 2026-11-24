from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .detail import Detail, DetailDict


class ErrorCloroDevCountriesApi(SdkBaseModel):
    code: Optional[str] = UNSET
    message: Optional[str] = UNSET
    details: Optional[list[Detail]] = UNSET
    """One entry per invalid field. Sent on request-body validation errors."""

    timestamp: Optional[RFC3339DateTime] = UNSET


class ErrorCloroDevCountriesApiDict(TypedDict):
    code: NotRequired[str]
    message: NotRequired[str]
    details: NotRequired[list[DetailDict]]
    timestamp: NotRequired[RFC3339DateTime]
