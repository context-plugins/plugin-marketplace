from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .vocabulary_filter_info import VocabularyFilterInfo, VocabularyFilterInfoDict


class ListVocabularyFiltersResponse(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If NextToken is present in your response, it indicates that not all results are displayed. To view the next set
    of results, copy the string associated with the NextToken parameter in your results output, then run your request
    again including NextToken with the value of the copied string. Repeat as needed to view all your results."""

    vocabulary_filters: Optional[list[VocabularyFilterInfo]] = Field(default=UNSET, alias="VocabularyFilters")
    """Provides information about the custom vocabulary filters that match the criteria specified in your request."""


class ListVocabularyFiltersResponseDict(TypedDict):
    next_token: NotRequired[str]
    vocabulary_filters: NotRequired[list[VocabularyFilterInfoDict]]
