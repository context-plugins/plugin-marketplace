from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .entity_recognizer_filter import EntityRecognizerFilter, EntityRecognizerFilterDict


class ListEntityRecognizersRequest(SdkBaseModel):
    filter: Optional[EntityRecognizerFilter] = Field(default=UNSET, alias="Filter")
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Identifies the next page of results to return."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of results to return on each page. The default is 100."""


class ListEntityRecognizersRequestDict(TypedDict):
    filter: NotRequired[EntityRecognizerFilterDict]
    next_token: NotRequired[str]
    max_results: NotRequired[int]
