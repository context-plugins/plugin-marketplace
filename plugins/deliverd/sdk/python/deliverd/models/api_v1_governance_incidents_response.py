from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item import Item, ItemDict


class ApiV1GovernanceIncidentsResponse(SdkBaseModel):
    items: list[Item]
    next_cursor: str | None = Field(alias="nextCursor")


class ApiV1GovernanceIncidentsResponseDict(TypedDict):
    items: list[ItemDict]
    next_cursor: str | None
