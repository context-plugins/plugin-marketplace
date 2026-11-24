from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateOrderLineAttributeRequestPricingCreditUnitBracketsItems(SdkBaseModel):
    up_to: int | None = Field(alias="upTo")
    credit_units: int = Field(alias="creditUnits")


class CreateOrderLineAttributeRequestPricingCreditUnitBracketsItemsDict(TypedDict):
    up_to: int | None
    credit_units: int
