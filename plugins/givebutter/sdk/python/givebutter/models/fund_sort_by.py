from __future__ import annotations

from typing import Literal

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.value import ValueOrStr


class FundSortBy(SdkBaseModel):
    """Fund sort order. One of ``order_asc``, ``name_asc``, ``created_at_desc``."""

    name: Literal["fund_sort_by"] = "fund_sort_by"
    value: OptionalNullable[ValueOrStr] = UNSET


class FundSortByDict(TypedDict):
    name: Literal["fund_sort_by"]
    value: NotRequired[ValueOrStr | None]
