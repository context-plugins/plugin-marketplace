from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .collection import Collection, CollectionDict


class ApiV1CollectionsResponse1(SdkBaseModel):
    collections: list[Collection]
    next_cursor: str | None = Field(alias="nextCursor")
    """Pass back as ?cursor= for the next page. Null means this is the end."""


class ApiV1CollectionsResponse1Dict(TypedDict):
    collections: list[CollectionDict]
    next_cursor: str | None
