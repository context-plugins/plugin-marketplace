from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .applicability_conditions import ApplicabilityConditions, ApplicabilityConditionsDict
from .enums.rate_application_method import RateApplicationMethodOrStr
from .enums.unit_of_measure import UnitOfMeasureOrStr


class Tier(SdkBaseModel):
    name: str
    """A display name for the tier."""

    unit_of_measure: UnitOfMeasureOrStr = Field(alias="unitOfMeasure")
    """The unit of measure that applies to the minimumValue and maximumValue values e.g. a DOLLAR amount. PERCENT (in
    the case of loan-to-value ratio or LVR). Tier term period representing a discrete number of MONTH's or DAY's (in the
    case of term deposit tiers)."""

    minimum_value: int = Field(alias="minimumValue")
    """The number of unitOfMeasure units that form the lower bound of the tier. The tier should be inclusive of this
    value."""

    maximum_value: Optional[int] = Field(default=UNSET, alias="maximumValue")
    """The number of unitOfMeasure units that form the upper bound of the tier or band. For a tier with a discrete value
    (as opposed to a range of values e.g. 1 month) this must be the same as minimumValue. Where this is the same as the
    minimumValue value of the next-higher tier the referenced tier should be exclusive of this value. For example a term
    deposit of 2 months falls into the upper tier of the following tiers: (1 - 2 months, 2 - 3 months). If absent the
    tier's range has no upper bound.."""

    rate_application_method: Optional[RateApplicationMethodOrStr] = Field(default=UNSET, alias="rateApplicationMethod")
    """The method used to calculate the amount to be applied using one or more tiers. A single rate may be applied to
    the entire balance or each applicable tier rate is applied to the portion of the balance that falls into that tier
    (referred to as 'bands' or 'steps')."""

    applicability_conditions: OptionalNullable[ApplicabilityConditions] = Field(
        default=UNSET, alias="applicabilityConditions"
    )
    additional_info: Optional[str] = Field(default=UNSET, alias="additionalInfo")
    """Display text providing more information on the rate tier."""

    additional_info_uri: Optional[str] = Field(default=UNSET, alias="additionalInfoUri")
    """Link to a web page with more information on this rate tier."""


class TierDict(TypedDict):
    name: str
    unit_of_measure: UnitOfMeasureOrStr
    minimum_value: int
    maximum_value: NotRequired[int]
    rate_application_method: NotRequired[RateApplicationMethodOrStr]
    applicability_conditions: NotRequired[ApplicabilityConditionsDict | None]
    additional_info: NotRequired[str]
    additional_info_uri: NotRequired[str]
