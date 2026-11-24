from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class SearchKeyword(SdkBaseModel):
    search_keyword: str = Field(alias="searchKeyword")
    """The lowercase query a customer typed to find the business."""

    value: OptionalNullable[float] = UNSET
    """Exact number of unique users, when Google discloses it. Null when ``threshold`` is returned instead."""

    threshold: OptionalNullable[float] = UNSET
    """Returned for low-volume keywords instead of ``value``: the real count is below this number. Ignoring it drops the
    long tail."""


class SearchKeywordDict(TypedDict):
    search_keyword: str
    value: NotRequired[float | None]
    threshold: NotRequired[float | None]
