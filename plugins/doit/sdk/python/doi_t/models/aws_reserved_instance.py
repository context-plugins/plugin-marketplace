from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .aws_reserved_instance_recurring_charge import (
    AwsReservedInstanceRecurringCharge,
    AwsReservedInstanceRecurringChargeDict,
)
from .enums.commitment_term import CommitmentTermOrStr
from .enums.offering_class import OfferingClassOrStr
from .enums.state1 import State1OrStr
from .money import Money, MoneyDict


class AwsReservedInstance(SdkBaseModel):
    """Reserved Instance item in the external inventory response. Money fields are wrapped ``{amount, currency}``
    objects."""

    commitment_id: str = Field(alias="commitmentId")
    """Reserved Instance ID (AWS-assigned)."""

    reserved_instance_arn: OptionalNullable[str] = Field(default=UNSET, alias="reservedInstanceArn")
    """Full Amazon Resource Name (ARN) of the Reserved Instance, when known."""

    account_id: str = Field(alias="accountId")
    """AWS account ID where the Reserved Instance exists."""

    state: State1OrStr
    """Reserved Instance state, tracking the AWS EC2 Reserved Instance API verbatim in external snake_case form. Differs
    from Savings Plan states by design. For example, the terminal state is ``retired`` here vs ``expired`` on Savings
    Plans."""

    instance_type: str = Field(alias="instanceType")
    """EC2 instance type on which the RI can be used (for example, ``m5.large``)."""

    instance_count: OptionalNullable[int] = Field(default=UNSET, alias="instanceCount")
    """Number of instances covered by this Reserved Instance. Null when unknown."""

    instance_tenancy: Optional[str] = Field(default=UNSET, alias="instanceTenancy")
    """Tenancy of the instance (for example, ``default``, ``dedicated``)."""

    availability_zone: OptionalNullable[str] = Field(default=UNSET, alias="availabilityZone")
    """Availability Zone when the RI is AZ-scoped. Null for region-scoped RIs."""

    region: OptionalNullable[str] = UNSET
    """AWS region of the Reserved Instance (for example, ``us-east-1``). Null when unknown."""

    platform: OptionalNullable[str] = UNSET
    """Platform identifier from AWS (for example, Linux/UNIX). Null when unknown."""

    description: Optional[str] = UNSET
    """Product platform description from AWS inventory."""

    scope: Optional[str] = UNSET
    """Scope of the Reserved Instance (for example, ``Availability Zone``, ``Region``)."""

    offering_class: Optional[OfferingClassOrStr] = Field(default=UNSET, alias="offeringClass")
    """RI offering class."""

    offering_type: Optional[str] = Field(default=UNSET, alias="offeringType")
    """RI offering type / payment option label from AWS (for example, ``All Upfront``)."""

    term_duration: Optional[CommitmentTermOrStr] = Field(default=UNSET, alias="termDuration")
    """Term inferred from the RI duration. Absent when it does not map cleanly to 1yr / 3yr."""

    duration_seconds: OptionalNullable[int] = Field(default=UNSET, alias="durationSeconds")
    """RI duration in seconds."""

    start_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="startTime")
    """When the Reserved Instance started. Null when unknown."""

    end_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="endTime")
    """When the Reserved Instance ends or ended. Null when unknown."""

    currency_code: Optional[str] = Field(default=UNSET, alias="currencyCode")
    """ISO 4217 currency code (USD in practice)."""

    fixed_price: Optional[Money] = Field(default=UNSET, alias="fixedPrice")
    """Purchase price of the Reserved Instance."""

    usage_price: Optional[Money] = Field(default=UNSET, alias="usagePrice")
    """Usage price per hour."""

    hourly_recurring_fee: Optional[Money] = Field(default=UNSET, alias="hourlyRecurringFee")
    """Hourly recurring fee for the Reserved Instance."""

    upfront_fee: Optional[Money] = Field(default=UNSET, alias="upfrontFee")
    """Upfront fee paid for the Reserved Instance."""

    total_asset_value: Optional[Money] = Field(default=UNSET, alias="totalAssetValue")
    """Total asset value of the Reserved Instance over its term."""

    average_on_demand_hourly_rate: Optional[Money] = Field(default=UNSET, alias="averageOnDemandHourlyRate")
    """Average on-demand hourly rate used for savings comparisons."""

    amortized_recurring_fee: Optional[Money] = Field(default=UNSET, alias="amortizedRecurringFee")
    """Amortized recurring fee over the RI term."""

    amortized_upfront_fee: Optional[Money] = Field(default=UNSET, alias="amortizedUpfrontFee")
    """Amortized upfront fee over the RI term."""

    total_amortized_fee: Optional[Money] = Field(default=UNSET, alias="totalAmortizedFee")
    """Sum of amortized upfront and recurring fees."""

    net_ri_savings: Optional[Money] = Field(default=UNSET, alias="netRiSavings")
    """Net savings from the Reserved Instance versus on-demand."""

    realized_savings: Optional[Money] = Field(default=UNSET, alias="realizedSavings")
    """Realized savings from hours actually covered by the RI."""

    unrealized_savings: Optional[Money] = Field(default=UNSET, alias="unrealizedSavings")
    """Forgone savings from unused RI hours."""

    total_potential_ri_savings: Optional[Money] = Field(default=UNSET, alias="totalPotentialRiSavings")
    """Total potential savings if the RI were fully utilized."""

    on_demand_cost_of_ri_hours_used: Optional[Money] = Field(default=UNSET, alias="onDemandCostOfRiHoursUsed")
    """On-demand cost equivalent of the RI hours that were used."""

    ri_cost_for_unused_hours: Optional[Money] = Field(default=UNSET, alias="riCostForUnusedHours")
    """RI cost attributable to unused hours."""

    purchased_hours: OptionalNullable[int] = Field(default=UNSET, alias="purchasedHours")
    """Total hours purchased for this RI in the reporting window. Null when unknown."""

    purchased_units: OptionalNullable[int] = Field(default=UNSET, alias="purchasedUnits")
    """Total normalized units purchased. Null when unknown."""

    total_actual_hours: OptionalNullable[int] = Field(default=UNSET, alias="totalActualHours")
    """Hours actually used against the RI. Null when unknown."""

    total_normalized_units: OptionalNullable[int] = Field(default=UNSET, alias="totalNormalizedUnits")
    """Normalized units actually used. Null when unknown."""

    unused_hours: OptionalNullable[int] = Field(default=UNSET, alias="unusedHours")
    """Purchased hours that were not used. Null when unknown."""

    unused_normalized_units: OptionalNullable[int] = Field(default=UNSET, alias="unusedNormalizedUnits")
    """Purchased normalized units that were not used. Null when unknown."""

    utilization_percentage: OptionalNullable[float] = Field(default=UNSET, alias="utilizationPercentage")
    """Cost Explorer reported utilization, as a fraction from 0 to 1."""

    utilization_percentage_in_units: OptionalNullable[float] = Field(
        default=UNSET, alias="utilizationPercentageInUnits"
    )
    """Utilization percentage based on normalized units (0–1). Null when unknown."""

    mtd_savings: Money = Field(alias="mtdSavings")
    """Month-to-date realized savings."""

    mtd_utilization: OptionalNullable[float] = Field(default=UNSET, alias="mtdUtilization")
    """Month-to-date utilization (0–1). Null when not yet available. A stored 0% is indistinguishable from unavailable
    and is returned as null."""

    updated_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")
    """Timestamp of the last successful inventory sync for this Reserved Instance."""

    recurring_charges: Optional[list[AwsReservedInstanceRecurringCharge]] = Field(
        default=UNSET, alias="recurringCharges"
    )
    """Recurring charge schedule from AWS for this Reserved Instance."""


class AwsReservedInstanceDict(TypedDict):
    commitment_id: str
    reserved_instance_arn: NotRequired[str | None]
    account_id: str
    state: State1OrStr
    instance_type: str
    instance_count: NotRequired[int | None]
    instance_tenancy: NotRequired[str]
    availability_zone: NotRequired[str | None]
    region: NotRequired[str | None]
    platform: NotRequired[str | None]
    description: NotRequired[str]
    scope: NotRequired[str]
    offering_class: NotRequired[OfferingClassOrStr]
    offering_type: NotRequired[str]
    term_duration: NotRequired[CommitmentTermOrStr]
    duration_seconds: NotRequired[int | None]
    start_time: NotRequired[RFC3339DateTime | None]
    end_time: NotRequired[RFC3339DateTime | None]
    currency_code: NotRequired[str]
    fixed_price: NotRequired[MoneyDict]
    usage_price: NotRequired[MoneyDict]
    hourly_recurring_fee: NotRequired[MoneyDict]
    upfront_fee: NotRequired[MoneyDict]
    total_asset_value: NotRequired[MoneyDict]
    average_on_demand_hourly_rate: NotRequired[MoneyDict]
    amortized_recurring_fee: NotRequired[MoneyDict]
    amortized_upfront_fee: NotRequired[MoneyDict]
    total_amortized_fee: NotRequired[MoneyDict]
    net_ri_savings: NotRequired[MoneyDict]
    realized_savings: NotRequired[MoneyDict]
    unrealized_savings: NotRequired[MoneyDict]
    total_potential_ri_savings: NotRequired[MoneyDict]
    on_demand_cost_of_ri_hours_used: NotRequired[MoneyDict]
    ri_cost_for_unused_hours: NotRequired[MoneyDict]
    purchased_hours: NotRequired[int | None]
    purchased_units: NotRequired[int | None]
    total_actual_hours: NotRequired[int | None]
    total_normalized_units: NotRequired[int | None]
    unused_hours: NotRequired[int | None]
    unused_normalized_units: NotRequired[int | None]
    utilization_percentage: NotRequired[float | None]
    utilization_percentage_in_units: NotRequired[float | None]
    mtd_savings: MoneyDict
    mtd_utilization: NotRequired[float | None]
    updated_at: NotRequired[RFC3339DateTime | None]
    recurring_charges: NotRequired[list[AwsReservedInstanceRecurringChargeDict]]
