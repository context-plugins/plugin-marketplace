from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .qa_check_response import QaCheckResponse, QaCheckResponseDict


class QaCheckListResponse(SdkBaseModel):
    checks: list[QaCheckResponse]


class QaCheckListResponseDict(TypedDict):
    checks: list[QaCheckResponseDict]
