from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .result1 import Result1, Result1Dict
from .summary import Summary, SummaryDict


class NewsBatchResponse(SdkBaseModel):
    results: list[Result1]
    summary: Summary


class NewsBatchResponseDict(TypedDict):
    results: list[Result1Dict]
    summary: SummaryDict
