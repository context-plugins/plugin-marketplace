from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.status_bitbucket_issue_tracker_api import StatusBitbucketIssueTrackerApiOrStr


class IssueJobStatus(SdkBaseModel):
    """The status of an import or export job"""

    model_config = ConfigDict(extra="forbid")

    type_: Optional[str] = Field(default=UNSET, alias="type")
    status: Optional[StatusBitbucketIssueTrackerApiOrStr] = UNSET
    """The status of the import/export job"""

    phase: Optional[str] = UNSET
    """The phase of the import/export job"""

    total: Optional[int] = UNSET
    """The total number of issues being imported/exported"""

    count: Optional[int] = UNSET
    """The total number of issues already imported/exported"""

    pct: Optional[float] = UNSET
    """The percentage of issues already imported/exported"""


class IssueJobStatusDict(TypedDict):
    type_: NotRequired[str]
    status: NotRequired[StatusBitbucketIssueTrackerApiOrStr]
    phase: NotRequired[str]
    total: NotRequired[int]
    count: NotRequired[int]
    pct: NotRequired[float]
