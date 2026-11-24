from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class PriceByGrade(SdkBaseModel):
    grade: Optional[str] = UNSET
    sales: Optional[int] = UNSET
    average_price: OptionalNullable[float] = Field(default=UNSET, alias="averagePrice")
    min_price: OptionalNullable[float] = Field(default=UNSET, alias="minPrice")
    max_price: OptionalNullable[float] = Field(default=UNSET, alias="maxPrice")
    latest_price: OptionalNullable[float] = Field(default=UNSET, alias="latestPrice")


class PriceByGradeDict(TypedDict):
    grade: NotRequired[str]
    sales: NotRequired[int]
    average_price: NotRequired[float | None]
    min_price: NotRequired[float | None]
    max_price: NotRequired[float | None]
    latest_price: NotRequired[float | None]
