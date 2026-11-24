from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .money import Money, MoneyDict


class AwsDailyCoverageEntry(SdkBaseModel):
    """One day of commitment-coverage breakdown. Money fields are wrapped objects (``{amount, currency}``). Omitted cost
    properties mean that coverage type had no spend for the day."""

    date: Date
    """Calendar day (UTC) for this coverage row in format YYYY-MM-DD."""

    on_demand_cost: Optional[Money] = Field(default=UNSET, alias="onDemandCost")
    """On-demand spend not covered by commitments for the day."""

    savings_plan_cost: Optional[Money] = Field(default=UNSET, alias="savingsPlanCost")
    """Spend covered by Savings Plans for the day."""

    reserved_inst_cost: Optional[Money] = Field(default=UNSET, alias="reservedInstCost")
    """Spend covered by Reserved Instances for the day."""

    flexsave_cost: Optional[Money] = Field(default=UNSET, alias="flexsaveCost")
    """Spend covered by DoiT Flexsave for the day."""

    spot_cost: Optional[Money] = Field(default=UNSET, alias="spotCost")
    """Spot Instance spend for the day."""


class AwsDailyCoverageEntryDict(TypedDict):
    date: Date
    on_demand_cost: NotRequired[MoneyDict]
    savings_plan_cost: NotRequired[MoneyDict]
    reserved_inst_cost: NotRequired[MoneyDict]
    flexsave_cost: NotRequired[MoneyDict]
    spot_cost: NotRequired[MoneyDict]
