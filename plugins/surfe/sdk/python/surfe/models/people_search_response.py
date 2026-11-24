from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .person import Person, PersonDict


class PeopleSearchResponse(SdkBaseModel):
    people: Optional[list[Person]] = UNSET
    total: Optional[int] = UNSET
    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")


class PeopleSearchResponseDict(TypedDict):
    people: NotRequired[list[PersonDict]]
    total: NotRequired[int]
    next_page_token: NotRequired[str]
