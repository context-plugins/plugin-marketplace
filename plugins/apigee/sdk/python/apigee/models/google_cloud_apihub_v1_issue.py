from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.severity_apigee_projects_api import SeverityApigeeProjectsApiOrStr
from .google_cloud_apihub_v1_range2 import GoogleCloudApihubV1Range2, GoogleCloudApihubV1Range2Dict


class GoogleCloudApihubV1Issue(SdkBaseModel):
    """Issue contains the details of a single issue found by the linter."""

    message: Optional[str] = UNSET
    """Required. Human-readable message describing the issue found by the linter."""

    severity: Optional[SeverityApigeeProjectsApiOrStr] = UNSET
    """Required. Severity level of the rule violation."""

    range_: Optional[GoogleCloudApihubV1Range2] = Field(default=UNSET, alias="range")
    """Required. Object describing where in the file the issue was found."""

    code: Optional[str] = UNSET
    """Required. Rule code unique to each rule defined in linter."""

    path: Optional[list[str]] = UNSET
    """Required. An array of strings indicating the location in the analyzed document where the rule was triggered."""


class GoogleCloudApihubV1IssueDict(TypedDict):
    message: NotRequired[str]
    severity: NotRequired[SeverityApigeeProjectsApiOrStr]
    range_: NotRequired[GoogleCloudApihubV1Range2Dict]
    code: NotRequired[str]
    path: NotRequired[list[str]]
