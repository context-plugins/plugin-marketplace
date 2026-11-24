from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .person_search_item import PersonSearchItem, PersonSearchItemDict


class PersonsSearchResponse(SdkBaseModel):
    data: list[PersonSearchItem]
    total: int
    """Number of distinct persons found (before ``limit`` slicing)."""

    note: OptionalNullable[str] = UNSET
    """Present when the internal scan limit was reached and results may be incomplete."""


class PersonsSearchResponseDict(TypedDict):
    data: list[PersonSearchItemDict]
    total: int
    note: NotRequired[str | None]
