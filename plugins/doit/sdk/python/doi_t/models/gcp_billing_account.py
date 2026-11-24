from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .gcp_onboarding_status_by_service import GcpOnboardingStatusByService, GcpOnboardingStatusByServiceDict
from .gcp_savings_totals_by_service import GcpSavingsTotalsByService, GcpSavingsTotalsByServiceDict
from .gcp_stats30_d_by_service import GcpStats30DByService, GcpStats30DByServiceDict


class GcpBillingAccount(SdkBaseModel):
    billing_account_id: str = Field(alias="billingAccountId")
    """GCP Billing Account ID."""

    display_name: OptionalNullable[str] = Field(default=UNSET, alias="displayName")
    """Human-readable account name, if available. Defaults to the GCP Billing Account display name; may be overridden by
    a custom name set on the asset in the DoiT Console. Null when no name is available."""

    currency: OptionalNullable[str] = UNSET
    """ISO 4217 currency code for this billing account."""

    onboarding_status: Optional[list[GcpOnboardingStatusByService]] = Field(default=UNSET, alias="onboardingStatus")
    """PerfectScale for Commitments onboarding status per product line (``compute``, ``cloud_sql``), ordered ``compute``
    first. A product line is omitted when it is not onboarded; the field is absent when no product line is onboarded."""

    cud_export_healthy: OptionalNullable[bool] = Field(default=UNSET, alias="cudExportHealthy")
    """``true`` if the BigQuery CUD export is healthy and up to date."""

    commitments_sync_time: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="commitmentsSyncTime")
    """Timestamp of the last successful CUD inventory sync. Null when a sync has not completed yet."""

    stats30d: Optional[list[GcpStats30DByService]] = UNSET
    """Trailing 30-day aggregate metrics (``esr``, ``savings``) per product line (``compute``, ``cloud_sql``), ordered
    ``compute`` first. Absent when no product line has stats."""

    savings_totals: Optional[list[GcpSavingsTotalsByService]] = Field(default=UNSET, alias="savingsTotals")
    """Year-to-date and lifetime savings per product line (``compute``, ``cloud_sql``), ordered ``compute`` first;
    absent when no product line has totals. Same values as returned by ``GET
    /ps4commitments/v1/gcp/billing-accounts/{billingAccountId}`` for this billing account, so callers can sum totals
    across billing accounts without making an extra get-by-id call per billing account. Lifetime is bounded by each
    billing account's PerfectScale for Commitments onboarding start date."""


class GcpBillingAccountDict(TypedDict):
    billing_account_id: str
    display_name: NotRequired[str | None]
    currency: NotRequired[str | None]
    onboarding_status: NotRequired[list[GcpOnboardingStatusByServiceDict]]
    cud_export_healthy: NotRequired[bool | None]
    commitments_sync_time: NotRequired[RFC3339DateTime | None]
    stats30d: NotRequired[list[GcpStats30DByServiceDict]]
    savings_totals: NotRequired[list[GcpSavingsTotalsByServiceDict]]
