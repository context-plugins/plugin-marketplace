from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListVocabularyFiltersRequest(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """If your ListVocabularyFilters request returns more results than can be displayed, NextToken is displayed in the
    response with an associated string. To get the next page of results, copy this string and repeat your request,
    including NextToken with the value of the copied string. Repeat as needed to view all your results."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of custom vocabulary filters to return in each page of results. If there are fewer results
    than the value that you specify, only the actual results are returned. If you do not specify a value, a default of 5
    is used."""

    name_contains: Optional[str] = Field(default=UNSET, alias="NameContains")
    """Returns only the custom vocabulary filters that contain the specified string. The search is not case
    sensitive."""


class ListVocabularyFiltersRequestDict(TypedDict):
    next_token: NotRequired[str]
    max_results: NotRequired[int]
    name_contains: NotRequired[str]
