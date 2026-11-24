from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .plan_term import PlanTerm, PlanTermDict


class PricePlanResponseDto(SdkBaseModel):
    """Organization price plan response."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the price plan. The value begins with ``ppl``."""

    name: Optional[str] = UNSET
    """Price plan name"""

    monthly_price: Optional[float] = Field(default=UNSET, alias="monthlyPrice")
    """Price plan monthly subscription fee"""

    allow_trial: Optional[bool] = Field(default=UNSET, alias="allowTrial")
    """Set as ``true`` if the price plan allows a trial"""

    price_varies_per_user: Optional[bool] = Field(default=UNSET, alias="priceVariesPerUser")
    """Set as ``true`` if the price plan has per-user pricing"""

    plan_terms: Optional[list[PlanTerm]] = Field(default=UNSET, alias="planTerms")
    """Terms and conditions for additional charges in the price plan. These charges are for price plan features based on
    a combination of charge ``type``, ``tier``, ``quantity``, and ``price``."""


class PricePlanResponseDtoDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    monthly_price: NotRequired[float]
    allow_trial: NotRequired[bool]
    price_varies_per_user: NotRequired[bool]
    plan_terms: NotRequired[list[PlanTermDict]]
