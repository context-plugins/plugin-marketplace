from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .response_meta import ResponseMeta, ResponseMetaDict
from .watch_test_result import WatchTestResult, WatchTestResultDict


class V1WatchesTestResponse(SdkBaseModel):
    success: Optional[bool] = UNSET
    data: Optional[WatchTestResult] = UNSET
    """Result of POST /v1/watches/test (the pre-create dry-run)."""

    meta: Optional[ResponseMeta] = UNSET


class V1WatchesTestResponseDict(TypedDict):
    success: NotRequired[bool]
    data: NotRequired[WatchTestResultDict]
    meta: NotRequired[ResponseMetaDict]
