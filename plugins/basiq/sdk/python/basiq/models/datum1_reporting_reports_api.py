from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.title_reporting_reports_api import TitleReportingReportsApiOrStr


class Datum1ReportingReportsApi(SdkBaseModel):
    code: str
    """Application-specific error code, expressed as a string value."""

    title: Optional[TitleReportingReportsApiOrStr] = UNSET
    """Title of the error"""

    type_: str = Field(alias="type")
    """Type of the response, always "error"
    """

    detail: Optional[str] = UNSET
    """Connection source has to be web or open banking."""


class Datum1ReportingReportsApiDict(TypedDict):
    code: str
    title: NotRequired[TitleReportingReportsApiOrStr]
    type_: str
    detail: NotRequired[str]
