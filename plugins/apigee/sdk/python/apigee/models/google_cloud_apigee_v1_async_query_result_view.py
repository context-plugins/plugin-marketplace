from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_query_metadata3 import (
    GoogleCloudApigeeV1QueryMetadata3,
    GoogleCloudApigeeV1QueryMetadata3Dict,
)


class GoogleCloudApigeeV1AsyncQueryResultView(SdkBaseModel):
    error: Optional[str] = UNSET
    """Error message when there is a failure."""

    metadata: Optional[GoogleCloudApigeeV1QueryMetadata3] = UNSET
    """Metadata contains information like metrics, dimenstions etc of the AsyncQuery."""

    code: Optional[int] = UNSET
    """Error code when there is a failure."""

    rows: Optional[list[Any]] = UNSET
    """Rows of query result. Each row is a JSON object. Example: {sum(message_count): 1, developer_app: "(not
    set)",…}"""

    state: Optional[str] = UNSET
    """State of retrieving ResultView."""


class GoogleCloudApigeeV1AsyncQueryResultViewDict(TypedDict):
    error: NotRequired[str]
    metadata: NotRequired[GoogleCloudApigeeV1QueryMetadata3Dict]
    code: NotRequired[int]
    rows: NotRequired[list[Any]]
    state: NotRequired[str]
