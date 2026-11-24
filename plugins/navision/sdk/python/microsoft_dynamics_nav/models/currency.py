from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Currency(SdkBaseModel):
    id: Optional[UUID] = UNSET
    code: Optional[str] = UNSET
    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    symbol: Optional[str] = UNSET
    amount_decimal_places: Optional[str] = Field(default=UNSET, alias="amountDecimalPlaces")
    amount_rounding_precision: Optional[float] = Field(default=UNSET, alias="amountRoundingPrecision")
    last_modified_date_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="lastModifiedDateTime")


class CurrencyDict(TypedDict):
    id: NotRequired[UUID]
    code: NotRequired[str]
    display_name: NotRequired[str]
    symbol: NotRequired[str]
    amount_decimal_places: NotRequired[str]
    amount_rounding_precision: NotRequired[float]
    last_modified_date_time: NotRequired[RFC3339DateTime]
