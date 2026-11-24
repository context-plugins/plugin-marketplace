from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, SdkBaseModel
from .enums.commitment_term import CommitmentTermOrStr
from .enums.purchase_approval_status_doi_t_perfect_scale_for_commitments_gcp_api import (
    PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApiOrStr,
)
from .enums.status1_doi_t_perfect_scale_for_commitments_gcp_api import Status1DoiTPerfectScaleForCommitmentsGcpApiOrStr
from .gcp_purchase_plan_step import GcpPurchasePlanStep, GcpPurchasePlanStepDict
from .money import Money, MoneyDict


class GcpPlannedPurchase(SdkBaseModel):
    """Laddering projection for one product-line and region scope."""

    region: str
    """Region token for this projection scope (``lower_snake_case``, for example ``us_east1``). ``compute`` projections
    use the cross-region scope ``global``; ``cloud_sql`` projections use concrete regions."""

    status: Status1DoiTPerfectScaleForCommitmentsGcpApiOrStr
    """Projection lifecycle state. When the stored document has no ``status``, the server returns ``valid``."""

    purchase_approval_status: Optional[PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApiOrStr] = Field(
        default=UNSET, alias="purchaseApprovalStatus"
    )
    """Customer commitment approval state for this scope. Absent or unrecognized stored values (including ``REJECTED``)
    are returned as ``pending_approval``, except on autonomous automation-mode lines, where they are returned as
    ``approved`` since no customer approval is required."""

    pause_note: OptionalNullable[str] = Field(default=UNSET, alias="pauseNote")
    """Customer-visible pause reason, when purchases are paused."""

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

    final_commitment: Optional[Money] = Field(default=UNSET, alias="finalCommitment")
    """Target hourly commitment at the end of the laddering cycle. Currency is ``USD`` in v1."""

    weeks_to_target: OptionalNullable[int] = Field(default=UNSET, alias="weeksToTarget")
    """Number of ladder steps remaining to reach the target commitment."""

    planning_cycle_start_date: OptionalNullable[Date] = Field(default=UNSET, alias="planningCycleStartDate")
    """First day of the planning cycle for this projection. Null when not set."""

    planning_cycle_end_date: OptionalNullable[Date] = Field(default=UNSET, alias="planningCycleEndDate")
    """Last day of the planning cycle for this projection. Null when not set."""

    estimated_savings: Optional[Money] = Field(default=UNSET, alias="estimatedSavings")
    """Total estimated savings from the underlying recommendation. Currency is ``USD`` in v1."""

    steps: Optional[list[GcpPurchasePlanStep]] = UNSET
    """Weekly ladder steps from the projection output. Omitted when the stored document has no ``output`` section."""


class GcpPlannedPurchaseDict(TypedDict):
    region: str
    status: Status1DoiTPerfectScaleForCommitmentsGcpApiOrStr
    purchase_approval_status: NotRequired[PurchaseApprovalStatusDoiTPerfectScaleForCommitmentsGcpApiOrStr]
    pause_note: NotRequired[str | None]
    requires_approval: NotRequired[bool]
    wow_violation: NotRequired[bool]
    profile: NotRequired[str]
    term: NotRequired[CommitmentTermOrStr]
    final_commitment: NotRequired[MoneyDict]
    weeks_to_target: NotRequired[int | None]
    planning_cycle_start_date: NotRequired[Date | None]
    planning_cycle_end_date: NotRequired[Date | None]
    estimated_savings: NotRequired[MoneyDict]
    steps: NotRequired[list[GcpPurchasePlanStepDict]]
