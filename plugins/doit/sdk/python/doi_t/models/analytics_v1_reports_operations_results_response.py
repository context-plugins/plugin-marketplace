from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type9_doi_t_reports_api import Type9DoiTReportsApiOrStr
from .result_doi_t_reports_api import ResultDoiTReportsApi, ResultDoiTReportsApiDict


class AnalyticsV1ReportsOperationsResultsResponse(SdkBaseModel):
    id: Optional[str] = UNSET
    """The report's id. Present only when the operation was started against a saved report (run by id); omitted for ad
    hoc runs against an inline config."""

    report_name: Optional[str] = Field(default=UNSET, alias="reportName")
    """The report's current name, looked up at read time (not a snapshot from when the operation started). Present only
    when the operation was started against a saved report (run by id) and the report still exists; omitted for ad hoc
    runs against an inline config."""

    owner: Optional[str] = UNSET
    """Email address of the report owner, looked up at read time. Present only when the operation was started against a
    saved report (run by id) and the report still exists; omitted for ad hoc runs against an inline config."""

    type_: Optional[Type9DoiTReportsApiOrStr] = Field(default=UNSET, alias="type")
    """Present only when the operation was started against a saved report (run by id) and the report still exists;
    omitted for ad hoc runs against an inline config."""

    create_time: Optional[int] = Field(default=UNSET, alias="createTime")
    """The creation time of the report, in milliseconds since the epoch. Present only when the operation was started
    against a saved report (run by id) and the report still exists; omitted for ad hoc runs against an inline config."""

    update_time: Optional[int] = Field(default=UNSET, alias="updateTime")
    """The time when the report was last updated, in milliseconds since the epoch, looked up at read time. Present only
    when the operation was started against a saved report (run by id) and the report still exists; omitted for ad hoc
    runs against an inline config."""

    url_ui: Optional[str] = Field(default=UNSET, alias="urlUI")
    """The URL of the report in DoiT console. Present only when the operation was started against a saved report (run by
    id) and the report still exists; omitted for ad hoc runs against an inline config."""

    result: Optional[ResultDoiTReportsApi] = UNSET
    file_output: Optional[str] = Field(default=UNSET, alias="fileOutput")
    """Signed URL the rendered file can be downloaded from. Present only when the fileOutput parameter was supplied and
    the file was rendered. Never a variant of the response — the result property above is returned either way, so a
    render that fails leaves result intact and omits fileOutput rather than failing the call. The URL is valid for 7
    days; request the endpoint again for a fresh one."""


class AnalyticsV1ReportsOperationsResultsResponseDict(TypedDict):
    id: NotRequired[str]
    report_name: NotRequired[str]
    owner: NotRequired[str]
    type_: NotRequired[Type9DoiTReportsApiOrStr]
    create_time: NotRequired[int]
    update_time: NotRequired[int]
    url_ui: NotRequired[str]
    result: NotRequired[ResultDoiTReportsApiDict]
    file_output: NotRequired[str]
