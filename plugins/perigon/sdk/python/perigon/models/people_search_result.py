from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .person import Person, PersonDict


class PeopleSearchResult(SdkBaseModel):
    """Person search result"""

    status: int
    num_results: int = Field(alias="numResults")
    results: list[Person]


class PeopleSearchResultDict(TypedDict):
    status: int
    num_results: int
    results: list[PersonDict]
