from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EstimatedAnnualItSpend(SdkBaseModel):
    """Revealed via reveal: ["estimatedAnnualItSpend"] in Enrich Companies. Charged 1 credit when non-null."""

    value: Optional[float] = UNSET
    currency: Optional[str] = UNSET
    value_usd: Optional[float] = Field(default=UNSET, alias="valueUsd")


class EstimatedAnnualItSpendDict(TypedDict):
    value: NotRequired[float]
    currency: NotRequired[str]
    value_usd: NotRequired[float]
