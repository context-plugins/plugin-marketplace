from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, SdkBaseModel
from .aws_purchase_plan_step import AwsPurchasePlanStep, AwsPurchasePlanStepDict
from .enums.commitment_term import CommitmentTermOrStr
from .enums.payment_option3 import PaymentOption3OrStr
from .enums.purchase_approval_status import PurchaseApprovalStatusOrStr
from .enums.service import ServiceOrStr
from .enums.status_doi_t_perfect_scale_for_commitments_aws_api import StatusDoiTPerfectScaleForCommitmentsAwsApiOrStr
from .money import Money, MoneyDict


class AwsPlannedPurchase(SdkBaseModel):
    management_account_id: str = Field(alias="managementAccountId")
    """12-digit account number of the AWS organization's management (payer) account."""

    service: ServiceOrStr
    """Commitment type this projection belongs to (``compute`` or ``database``)."""

    status: StatusDoiTPerfectScaleForCommitmentsAwsApiOrStr
    """Projection lifecycle state. ``expired`` means the planning cycle has lapsed and a new projection should be
    triggered by the automated scheduler. When the stored document has no ``status``, the server returns ``valid``."""

    purchase_approval_status: Optional[PurchaseApprovalStatusOrStr] = Field(
        default=UNSET, alias="purchaseApprovalStatus"
    )
    """Approval state for purchases of this commitment type. Approve or pause on the Planned Purchases tab in the DoiT
    Console. Absent or unrecognized stored values are returned as ``pending_approval``, except on autonomous
    automation-mode lines, where they are returned as ``approved`` since no customer approval is required."""

    pause_note: OptionalNullable[str] = Field(default=UNSET, alias="pauseNote")
    """Customer-visible pause reason when ``purchaseApprovalStatus`` is ``paused``. Null when purchases are not
    paused."""

    requires_approval: Optional[bool] = Field(default=UNSET, alias="requiresApproval")
    """``true`` when the projection as a whole requires customer approval before the planner stores a purchase plan: the
    target ``finalCommitment`` exceeds the approved ceiling, and/or ``purchaseApprovalStatus`` is not ``approved``.
    Distinct from step-level ``steps[].requiresApproval``, which flags individual ladder rows that exceed the
    ceiling."""

    wow_violation: Optional[bool] = Field(default=UNSET, alias="wowViolation")
    """``true`` when week-over-week eligible spend dropped beyond the allowed threshold."""

    profile: Optional[str] = UNSET
    """Coverage target policy used to generate this projection (built-in or customer-defined). Omitted when the
    projection predates policy tracking."""

    term: Optional[CommitmentTermOrStr] = UNSET
    """Commitment term used for projected purchases."""

    payment_option: OptionalNullable[PaymentOption3OrStr] = Field(default=UNSET, alias="paymentOption")
    """Payment structure for projected purchases. May be null when not set on the stored projection."""

    final_commitment: Optional[Money] = Field(default=UNSET, alias="finalCommitment")
    """Target hourly commitment at the end of the laddering cycle. Currency is ``USD``."""

    weeks_to_target: OptionalNullable[int] = Field(default=UNSET, alias="weeksToTarget")
    """Number of ladder steps remaining to reach the target commitment."""

    planning_cycle_start_date: OptionalNullable[Date] = Field(default=UNSET, alias="planningCycleStartDate")
    """First day of the planning cycle for this projection. Null when not set."""

    planning_cycle_end_date: OptionalNullable[Date] = Field(default=UNSET, alias="planningCycleEndDate")
    """Last day of the planning cycle for this projection. Null when not set."""

    estimated_savings: Optional[Money] = Field(default=UNSET, alias="estimatedSavings")
    """Total estimated savings from the underlying recommendation. Currency is ``USD``."""

    steps: Optional[list[AwsPurchasePlanStep]] = UNSET
    """Weekly ladder steps from the projection output. Omitted when the stored document has no ``output`` section."""


class AwsPlannedPurchaseDict(TypedDict):
    management_account_id: str
    service: ServiceOrStr
    status: StatusDoiTPerfectScaleForCommitmentsAwsApiOrStr
    purchase_approval_status: NotRequired[PurchaseApprovalStatusOrStr]
    pause_note: NotRequired[str | None]
    requires_approval: NotRequired[bool]
    wow_violation: NotRequired[bool]
    profile: NotRequired[str]
    term: NotRequired[CommitmentTermOrStr]
    payment_option: NotRequired[PaymentOption3OrStr | None]
    final_commitment: NotRequired[MoneyDict]
    weeks_to_target: NotRequired[int | None]
    planning_cycle_start_date: NotRequired[Date | None]
    planning_cycle_end_date: NotRequired[Date | None]
    estimated_savings: NotRequired[MoneyDict]
    steps: NotRequired[list[AwsPurchasePlanStepDict]]
