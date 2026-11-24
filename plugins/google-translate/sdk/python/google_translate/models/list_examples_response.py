from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .example import Example, ExampleDict


class ListExamplesResponse(SdkBaseModel):
    """Response message for ListExamples."""

    examples: Optional[list[Example]] = UNSET
    """The sentence pairs."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token to retrieve next page of results. Pass this token to the page_token field in the ListExamplesRequest to
    obtain the corresponding page."""


class ListExamplesResponseDict(TypedDict):
    examples: NotRequired[list[ExampleDict]]
    next_page_token: NotRequired[str]
