from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .reserved_resource import ReservedResource, ReservedResourceDict


class GcpResourceCud(SdkBaseModel):
    """GCP resource-based Committed Use Discount (vCPU / memory). Mirrors the stored provider document verbatim (raw
    values, e.g. ``state``/``status`` "ACTIVE", ``plan`` "TWELVE_MONTH")."""

    auto_renew: Optional[bool] = Field(default=UNSET, alias="autoRenew")
    """``true`` if the CUD is configured to renew automatically at the end of its term."""

    billing_project_number: Optional[str] = Field(default=UNSET, alias="billingProjectNumber")
    """GCP project number billed for this CUD's charges."""

    commitment_numeric_id: str = Field(alias="commitmentNumericId")
    """Resource-based CUD ID (provider-assigned)."""

    created_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="createdTime")
    """When the CUD was created. Null when unknown."""

    custom_term_eligible_until: OptionalNullable[RFC3339DateTime] = Field(
        default=UNSET, alias="customTermEligibleUntil"
    )
    """Latest date by which this CUD is eligible for a custom-term exchange. Null when not eligible."""

    end_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="endTime")
    """When the CUD term ends. Null when unknown."""

    export_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="exportDate")
    """Timestamp of the BigQuery CUD export row this item was read from."""

    hardware_scope: Optional[str] = Field(default=UNSET, alias="hardwareScope")
    """Machine family this CUD's reserved resources apply to."""

    host_project_id: Optional[str] = Field(default=UNSET, alias="hostProjectId")
    """GCP project ID hosting the reserved resources."""

    inventory_state: Optional[str] = Field(default=UNSET, alias="inventoryState")
    """Raw provider inventory state."""

    last_month_cpu_coverage: Optional[float] = Field(default=UNSET, alias="lastMonthCPUCoverage")
    """Fraction (0–1) of vCPU usage covered by this CUD in the last full calendar month."""

    last_month_cpu_savings: Optional[float] = Field(default=UNSET, alias="lastMonthCPUSavings")
    """Realized vCPU savings in the last full calendar month."""

    last_month_cpu_utilization: Optional[float] = Field(default=UNSET, alias="lastMonthCPUUtilization")
    """Fraction (0–1) of this CUD's reserved vCPUs actually used in the last full calendar month."""

    last_month_memory_coverage: Optional[float] = Field(default=UNSET, alias="lastMonthMemoryCoverage")
    """Fraction (0–1) of memory usage covered by this CUD in the last full calendar month."""

    last_month_memory_savings: Optional[float] = Field(default=UNSET, alias="lastMonthMemorySavings")
    """Realized memory savings in the last full calendar month."""

    last_month_memory_utilization: Optional[float] = Field(default=UNSET, alias="lastMonthMemoryUtilization")
    """Fraction (0–1) of this CUD's reserved memory actually used in the last full calendar month."""

    name: Optional[str] = UNSET
    """Provider commitment display name."""

    organization_id: Optional[str] = Field(default=UNSET, alias="organizationId")
    """GCP organization ID that owns the host project."""

    plan: Optional[str] = UNSET
    """Raw provider commitment plan."""

    region: Optional[str] = UNSET
    """GCP region the reserved resources are scoped to."""

    reserved_resources: Optional[list[ReservedResource]] = Field(default=UNSET, alias="reservedResources")
    """Resources reserved by this CUD."""

    start_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="startTime")
    """When the CUD term started. Null when unknown."""

    state: str
    """Raw provider commitment state."""


class GcpResourceCudDict(TypedDict):
    auto_renew: NotRequired[bool]
    billing_project_number: NotRequired[str]
    commitment_numeric_id: str
    created_time: NotRequired[RFC3339DateTime | None]
    custom_term_eligible_until: NotRequired[RFC3339DateTime | None]
    end_time: NotRequired[RFC3339DateTime | None]
    export_date: NotRequired[RFC3339DateTime]
    hardware_scope: NotRequired[str]
    host_project_id: NotRequired[str]
    inventory_state: NotRequired[str]
    last_month_cpu_coverage: NotRequired[float]
    last_month_cpu_savings: NotRequired[float]
    last_month_cpu_utilization: NotRequired[float]
    last_month_memory_coverage: NotRequired[float]
    last_month_memory_savings: NotRequired[float]
    last_month_memory_utilization: NotRequired[float]
    name: NotRequired[str]
    organization_id: NotRequired[str]
    plan: NotRequired[str]
    region: NotRequired[str]
    reserved_resources: NotRequired[list[ReservedResourceDict]]
    start_time: NotRequired[RFC3339DateTime | None]
    state: str
