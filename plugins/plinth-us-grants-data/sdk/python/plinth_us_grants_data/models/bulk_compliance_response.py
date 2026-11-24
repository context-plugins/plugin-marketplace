from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .x_plinth import XPlinth, XPlinthDict


class BulkComplianceResponse(SdkBaseModel):
    code: int = 200
    message: str
    x_plinth: Optional[XPlinth] = UNSET
    results_count: int
    results: list[Any]
    invalid_eins: list[str]
    """Inputs that were not usable EINs, echoed back rather than dropped."""

    report_date: Optional[str] = UNSET
    sources: Optional[Any] = UNSET


class BulkComplianceResponseDict(TypedDict):
    code: NotRequired[int]
    message: str
    x_plinth: NotRequired[XPlinthDict]
    results_count: int
    results: list[Any]
    invalid_eins: list[str]
    report_date: NotRequired[str]
    sources: NotRequired[Any]
