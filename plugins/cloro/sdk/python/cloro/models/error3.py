from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .details1 import Details1, Details1Dict


class Error3(SdkBaseModel):
    code: Optional[str] = UNSET
    message: Optional[str] = UNSET
    details: Optional[list[Details1]] = UNSET
    """One entry per invalid field. Sent on request-body validation errors."""

    timestamp: Optional[RFC3339DateTime] = UNSET


class Error3Dict(TypedDict):
    code: NotRequired[str]
    message: NotRequired[str]
    details: NotRequired[list[Details1Dict]]
    timestamp: NotRequired[RFC3339DateTime]
