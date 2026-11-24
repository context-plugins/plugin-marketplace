from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.annotation_type import AnnotationTypeOrStr
from .enums.result_bitbucket_reports_api import ResultBitbucketReportsApiOrStr
from .enums.severity import SeverityOrStr


class ReportAnnotationBitbucketReportsApi(SdkBaseModel):
    """All Of object, report_annotation_Bitbucket Reports API."""

    type_: Optional[str] = Field(default=UNSET, alias="type")
    external_id: Optional[str] = UNSET
    """ID of the annotation provided by the annotation creator. It can be used to identify the annotation as an
    alternative to it's generated uuid. It is not used by Bitbucket, but only by the annotation creator for updating or
    deleting this specific annotation. Needs to be unique."""

    uuid: Optional[str] = UNSET
    """The UUID that can be used to identify the annotation."""

    annotation_type: Optional[AnnotationTypeOrStr] = UNSET
    """The type of the report."""

    path: Optional[str] = UNSET
    """The path of the file on which this annotation should be placed. This is the path of the file relative to the git
    repository. If no path is provided, then it will appear in the overview modal on all pull requests where the tip of
    the branch is the given commit, regardless of which files were modified."""

    line: Optional[int] = UNSET
    """The line number that the annotation should belong to. If no line number is provided, then it will default to 0
    and in a pull request it will appear at the top of the file specified by the path field."""

    summary: Optional[str] = UNSET
    """The message to display to users."""

    details: Optional[str] = UNSET
    """The details to show to users when clicking on the annotation."""

    result: Optional[ResultBitbucketReportsApiOrStr] = UNSET
    """The state of the report. May be set to PENDING and later updated."""

    severity: Optional[SeverityOrStr] = UNSET
    """The severity of the annotation."""

    link: Optional[str] = UNSET
    """A URL linking to the annotation in an external tool."""

    created_on: Optional[RFC3339DateTime] = UNSET
    """The timestamp when the report was created."""

    updated_on: Optional[RFC3339DateTime] = UNSET
    """The timestamp when the report was updated."""


class ReportAnnotationBitbucketReportsApiDict(TypedDict):
    type_: NotRequired[str]
    external_id: NotRequired[str]
    uuid: NotRequired[str]
    annotation_type: NotRequired[AnnotationTypeOrStr]
    path: NotRequired[str]
    line: NotRequired[int]
    summary: NotRequired[str]
    details: NotRequired[str]
    result: NotRequired[ResultBitbucketReportsApiOrStr]
    severity: NotRequired[SeverityOrStr]
    link: NotRequired[str]
    created_on: NotRequired[RFC3339DateTime]
    updated_on: NotRequired[RFC3339DateTime]
