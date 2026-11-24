from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .batch_detect_key_phrases_item_result import BatchDetectKeyPhrasesItemResult, BatchDetectKeyPhrasesItemResultDict
from .batch_item_error import BatchItemError, BatchItemErrorDict


class BatchDetectKeyPhrasesResponse(SdkBaseModel):
    result_list: list[BatchDetectKeyPhrasesItemResult] = Field(alias="ResultList")
    """A list of objects containing the results of the operation. The results are sorted in ascending order by the Index
    field and match the order of the documents in the input list. If all of the documents contain an error, the
    ResultList is empty."""

    error_list: list[BatchItemError] = Field(alias="ErrorList")
    """A list containing one object for each document that contained an error. The results are sorted in ascending order
    by the Index field and match the order of the documents in the input list. If there are no errors in the batch, the
    ErrorList is empty."""


class BatchDetectKeyPhrasesResponseDict(TypedDict):
    result_list: list[BatchDetectKeyPhrasesItemResultDict]
    error_list: list[BatchItemErrorDict]
