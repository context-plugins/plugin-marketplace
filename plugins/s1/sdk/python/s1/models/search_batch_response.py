from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .result import Result, ResultDict
from .summary import Summary, SummaryDict


class SearchBatchResponse(SdkBaseModel):
    results: list[Result]
    summary: Summary


class SearchBatchResponseDict(TypedDict):
    results: list[ResultDict]
    summary: SummaryDict
