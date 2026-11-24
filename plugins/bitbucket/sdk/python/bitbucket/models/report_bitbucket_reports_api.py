from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.report_type import ReportTypeOrStr
from .enums.result1_bitbucket_reports_api import Result1BitbucketReportsApiOrStr
from .report_data import ReportData, ReportDataDict


class ReportBitbucketReportsApi(SdkBaseModel):
    """All Of object, report_Bitbucket Reports API."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    uuid: Optional[str] = UNSET
    """The UUID that can be used to identify the report."""

    title: Optional[str] = UNSET
    """The title of the report."""

    details: Optional[str] = UNSET
    """A string to describe the purpose of the report."""

    external_id: Optional[str] = UNSET
    """ID of the report provided by the report creator. It can be used to identify the report as an alternative to it's
    generated uuid. It is not used by Bitbucket, but only by the report creator for updating or deleting this specific
    report. Needs to be unique."""

    reporter: Optional[str] = UNSET
    """A string to describe the tool or company who created the report."""

    link: Optional[str] = UNSET
    """A URL linking to the results of the report in an external tool."""

    remote_link_enabled: Optional[bool] = UNSET
    """If enabled, a remote link is created in Jira for the work item associated with the commit the report belongs
    to."""

    logo_url: Optional[str] = UNSET
    """A URL to the report logo. If none is provided, the default insights logo will be used."""

    report_type: Optional[ReportTypeOrStr] = UNSET
    """The type of the report."""

    result: Optional[Result1BitbucketReportsApiOrStr] = UNSET
    """The state of the report. May be set to PENDING and later updated."""

    data: Optional[list[ReportData]] = UNSET
    """An array of data fields to display information on the report. Maximum 10."""

    created_on: Optional[RFC3339DateTime] = UNSET
    """The timestamp when the report was created."""

    updated_on: Optional[RFC3339DateTime] = UNSET
    """The timestamp when the report was updated."""


class ReportBitbucketReportsApiDict(TypedDict):
    type_: NotRequired[str]
    uuid: NotRequired[str]
    title: NotRequired[str]
    details: NotRequired[str]
    external_id: NotRequired[str]
    reporter: NotRequired[str]
    link: NotRequired[str]
    remote_link_enabled: NotRequired[bool]
    logo_url: NotRequired[str]
    report_type: NotRequired[ReportTypeOrStr]
    result: NotRequired[Result1BitbucketReportsApiOrStr]
    data: NotRequired[list[ReportDataDict]]
    created_on: NotRequired[RFC3339DateTime]
    updated_on: NotRequired[RFC3339DateTime]
