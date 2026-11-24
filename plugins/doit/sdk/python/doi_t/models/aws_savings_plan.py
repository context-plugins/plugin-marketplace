from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.commitment_term import CommitmentTermOrStr
from .enums.payment_option1 import PaymentOption1OrStr
from .enums.savings_plan_type import SavingsPlanTypeOrStr
from .enums.state import StateOrStr
from .money import Money, MoneyDict


class AwsSavingsPlan(SdkBaseModel):
    commitment_id: str = Field(alias="commitmentId")
    """Savings Plan ID (AWS-assigned GUID)."""

    savings_plan_arn: OptionalNullable[str] = Field(default=UNSET, alias="savingsPlanArn")
    """Full ARN (Amazon Resource Name) of the Savings Plan, when known. ``null`` when DoiT doesn’t have the ARN stored
    yet."""

    savings_plan_type: SavingsPlanTypeOrStr = Field(alias="savingsPlanType")
    """Savings Plan type. Values match the AWS Savings Plans API in snake_case, plus ``database``."""

    state: StateOrStr
    """Savings Plan lifecycle state. Values match the AWS Savings Plans API in snake_case."""

    payment_option: Optional[PaymentOption1OrStr] = Field(default=UNSET, alias="paymentOption")
    """Upfront payment structure for this Savings Plan."""

    term_duration: Optional[CommitmentTermOrStr] = Field(default=UNSET, alias="termDuration")
    """Commitment term length for this Savings Plan."""

    commitment: Optional[Money] = UNSET
    """Hourly commitment amount."""

    upfront_payment_amount: Optional[Money] = Field(default=UNSET, alias="upfrontPaymentAmount")
    """Upfront payment amount. Null or omitted when payment option is ``no_upfront``."""

    recurring_payment_amount: Optional[Money] = Field(default=UNSET, alias="recurringPaymentAmount")
    """Recurring (typically hourly or monthly) payment amount after any upfront."""

    ec2_instance_family: OptionalNullable[str] = Field(default=UNSET, alias="ec2InstanceFamily")
    """EC2 instance family for ``ec2_instance`` plans (for example, ``m5``). Null for other plan types."""

    region: OptionalNullable[str] = UNSET
    """AWS region for plans that are region-scoped (for example, ``us-east-1``). Null when not applicable."""

    start_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="startTime")
    """When the Savings Plan started or is scheduled to start. Null when unknown."""

    end_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="endTime")
    """When the Savings Plan ends or ended. Null when unknown."""

    last_month_utilization: OptionalNullable[float] = Field(default=UNSET, alias="lastMonthUtilization")
    """Utilization in the last full calendar month, as a fraction from 0 to 1. Null when not yet available."""

    last_month_savings: Optional[Money] = Field(default=UNSET, alias="lastMonthSavings")
    """Realized savings in the last full calendar month. Null if not yet available."""


class AwsSavingsPlanDict(TypedDict):
    commitment_id: str
    savings_plan_arn: NotRequired[str | None]
    savings_plan_type: SavingsPlanTypeOrStr
    state: StateOrStr
    payment_option: NotRequired[PaymentOption1OrStr]
    term_duration: NotRequired[CommitmentTermOrStr]
    commitment: NotRequired[MoneyDict]
    upfront_payment_amount: NotRequired[MoneyDict]
    recurring_payment_amount: NotRequired[MoneyDict]
    ec2_instance_family: NotRequired[str | None]
    region: NotRequired[str | None]
    start_time: NotRequired[RFC3339DateTime | None]
    end_time: NotRequired[RFC3339DateTime | None]
    last_month_utilization: NotRequired[float | None]
    last_month_savings: NotRequired[MoneyDict]
