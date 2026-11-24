from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItems(SdkBaseModel):
    up_to: int | None = Field(alias="upTo")
    credit_units: int = Field(alias="creditUnits")


class PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsCreditUnitBracketsItemsDict(TypedDict):
    up_to: int | None
    credit_units: int
