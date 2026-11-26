from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Guidance(SdkBaseModel):
    period: Optional[str] = UNSET
    revenue: OptionalNullable[str] = UNSET
    gross_margin: OptionalNullable[str] = UNSET
    operating_expenses: OptionalNullable[str] = UNSET
    tax_rate: OptionalNullable[str] = UNSET
    other: Optional[list[str]] = UNSET


class GuidanceDict(TypedDict):
    period: NotRequired[str]
    revenue: NotRequired[str | None]
    gross_margin: NotRequired[str | None]
    operating_expenses: NotRequired[str | None]
    tax_rate: NotRequired[str | None]
    other: NotRequired[list[str]]
