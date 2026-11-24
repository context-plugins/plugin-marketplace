from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.order_by import OrderByOrInt


class SortOptions(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    name: OptionalNullable[str] = UNSET
    sort_order: Optional[OrderByOrInt] = Field(default=UNSET, alias="sortOrder")
    """1 = Asc 3 = Desc"""


class SortOptionsDict(TypedDict):
    name: NotRequired[str | None]
    sort_order: NotRequired[OrderByOrInt]
