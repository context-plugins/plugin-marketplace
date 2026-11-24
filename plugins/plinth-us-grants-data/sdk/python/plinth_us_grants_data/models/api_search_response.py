from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .result import Result, ResultDict


class ApiSearchResponse(SdkBaseModel):
    mode: Optional[str] = UNSET
    """The mode actually served (may differ from the one requested if it degraded)."""

    results: Optional[list[Result]] = UNSET


class ApiSearchResponseDict(TypedDict):
    mode: NotRequired[str]
    results: NotRequired[list[ResultDict]]
