from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_security_report_metadata2 import (
    GoogleCloudApigeeV1SecurityReportMetadata2,
    GoogleCloudApigeeV1SecurityReportMetadata2Dict,
)


class GoogleCloudApigeeV1SecurityReportResultView(SdkBaseModel):
    """The response for security report result view APIs."""

    rows: Optional[list[Any]] = UNSET
    """Rows of security report result. Each row is a JSON object. Example: {sum(message_count): 1, developer_app: "(not
    set)",…}"""

    metadata: Optional[GoogleCloudApigeeV1SecurityReportMetadata2] = UNSET
    """Metadata contains information like metrics, dimenstions etc of the security report."""

    error: Optional[str] = UNSET
    """Error message when there is a failure."""

    state: Optional[str] = UNSET
    """State of retrieving ResultView."""

    code: Optional[int] = UNSET
    """Error code when there is a failure."""


class GoogleCloudApigeeV1SecurityReportResultViewDict(TypedDict):
    rows: NotRequired[list[Any]]
    metadata: NotRequired[GoogleCloudApigeeV1SecurityReportMetadata2Dict]
    error: NotRequired[str]
    state: NotRequired[str]
    code: NotRequired[int]
