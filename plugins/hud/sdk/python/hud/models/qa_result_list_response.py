from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .qa_result_response import QaResultResponse, QaResultResponseDict


class QaResultListResponse(SdkBaseModel):
    results: list[QaResultResponse]


class QaResultListResponseDict(TypedDict):
    results: list[QaResultResponseDict]
