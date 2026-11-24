from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code import CodeOrStr
from .source2_reporting_reports_api import Source2ReportingReportsApi, Source2ReportingReportsApiDict


class Datum6(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Type of the response, always "error"
    """

    title: Optional[str] = UNSET
    """Title of the error"""

    code: Optional[CodeOrStr] = UNSET
    """Application-specific error code, expressed as a string value."""

    detail: Optional[str] = UNSET
    """Human-readable explanation specific to this occurrence of the problem."""

    source: Optional[Source2ReportingReportsApi] = UNSET


class Datum6Dict(TypedDict):
    type_: NotRequired[str]
    title: NotRequired[str]
    code: NotRequired[CodeOrStr]
    detail: NotRequired[str]
    source: NotRequired[Source2ReportingReportsApiDict]
