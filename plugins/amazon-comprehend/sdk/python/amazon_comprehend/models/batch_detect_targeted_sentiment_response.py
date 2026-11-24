from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .batch_detect_targeted_sentiment_item_result import (
    BatchDetectTargetedSentimentItemResult,
    BatchDetectTargetedSentimentItemResultDict,
)
from .batch_item_error import BatchItemError, BatchItemErrorDict


class BatchDetectTargetedSentimentResponse(SdkBaseModel):
    result_list: list[BatchDetectTargetedSentimentItemResult] = Field(alias="ResultList")
    """A list of objects containing the results of the operation. The results are sorted in ascending order by the Index
    field and match the order of the documents in the input list. If all of the documents contain an error, the
    ResultList is empty."""

    error_list: list[BatchItemError] = Field(alias="ErrorList")
    """List of errors that the operation can return."""


class BatchDetectTargetedSentimentResponseDict(TypedDict):
    result_list: list[BatchDetectTargetedSentimentItemResultDict]
    error_list: list[BatchItemErrorDict]
