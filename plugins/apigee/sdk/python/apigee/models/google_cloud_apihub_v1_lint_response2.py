from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.linter import LinterOrStr
from .enums.state_apigee_projects_api import StateApigeeProjectsApiOrStr
from .google_cloud_apihub_v1_issue import GoogleCloudApihubV1Issue, GoogleCloudApihubV1IssueDict
from .google_cloud_apihub_v1_summary_entry import GoogleCloudApihubV1SummaryEntry, GoogleCloudApihubV1SummaryEntryDict


class GoogleCloudApihubV1LintResponse2(SdkBaseModel):
    """Optional. The lint response for the spec."""

    issues: Optional[list[GoogleCloudApihubV1Issue]] = UNSET
    """Optional. Array of issues found in the analyzed document."""

    source: Optional[str] = UNSET
    """Required. Name of the linting application."""

    state: Optional[StateApigeeProjectsApiOrStr] = UNSET
    """Required. Lint state represents success or failure for linting."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Required. Timestamp when the linting response was generated."""

    linter: Optional[LinterOrStr] = UNSET
    """Required. Name of the linter used."""

    summary: Optional[list[GoogleCloudApihubV1SummaryEntry]] = UNSET
    """Optional. Summary of all issue types and counts for each severity level."""


class GoogleCloudApihubV1LintResponse2Dict(TypedDict):
    issues: NotRequired[list[GoogleCloudApihubV1IssueDict]]
    source: NotRequired[str]
    state: NotRequired[StateApigeeProjectsApiOrStr]
    create_time: NotRequired[str]
    linter: NotRequired[LinterOrStr]
    summary: NotRequired[list[GoogleCloudApihubV1SummaryEntryDict]]
