from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Area(SdkBaseModel):
    area_id: Optional[str] = Field(default=UNSET, alias="areaId")
    """Opaque token. Order with it in the same session."""

    area_name: Optional[str] = Field(default=UNSET, alias="areaName")
    area_code: Optional[str] = Field(default=UNSET, alias="areaCode")
    stock: Optional[int] = UNSET
    orderable: Optional[bool] = UNSET
    est_monthly_usd: OptionalNullable[float] = Field(default=UNSET, alias="estMonthlyUsd")
    """Your monthly price per number in this area, at your contract rates."""


class AreaDict(TypedDict):
    area_id: NotRequired[str]
    area_name: NotRequired[str]
    area_code: NotRequired[str]
    stock: NotRequired[int]
    orderable: NotRequired[bool]
    est_monthly_usd: NotRequired[float | None]
