from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Data1ZillapiZillowPropertyDataPropertiesApi(SdkBaseModel):
    zestimate: OptionalNullable[float] = UNSET
    rent_zestimate: OptionalNullable[float] = UNSET
    tax_assessed_value: OptionalNullable[float] = UNSET
    last_sold_price: OptionalNullable[float] = UNSET
    currency: Optional[str] = UNSET


class Data1ZillapiZillowPropertyDataPropertiesApiDict(TypedDict):
    zestimate: NotRequired[float | None]
    rent_zestimate: NotRequired[float | None]
    tax_assessed_value: NotRequired[float | None]
    last_sold_price: NotRequired[float | None]
    currency: NotRequired[str]
