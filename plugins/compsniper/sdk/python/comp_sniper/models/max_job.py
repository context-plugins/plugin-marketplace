from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .delivery2 import Delivery2, Delivery2Dict
from .enums.credit_preference import CreditPreferenceOrStr
from .enums.status_comp_sniper_marketplace_and_shipping_scrape_api import (
    StatusCompSniperMarketplaceAndShippingScrapeApiOrStr,
)
from .enums.termination_reason import TerminationReasonOrStr
from .max_progress import MaxProgress, MaxProgressDict
from .max_summary import MaxSummary, MaxSummaryDict
from .sold_item import SoldItem, SoldItemDict


class MaxJob(SdkBaseModel):
    job_id: UUID = Field(alias="jobId")
    status: StatusCompSniperMarketplaceAndShippingScrapeApiOrStr
    keyword: str
    max_pages: int = Field(alias="maxPages")
    pages_done: int = Field(alias="pagesDone")
    items_found: int = Field(alias="itemsFound")
    total_results: OptionalNullable[str] = Field(default=UNSET, alias="totalResults")
    created_at: RFC3339DateTime = Field(alias="createdAt")
    started_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="startedAt")
    completed_at: OptionalNullable[RFC3339DateTime] = Field(default=UNSET, alias="completedAt")
    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    progress: Optional[MaxProgress] = UNSET
    termination_reason: OptionalNullable[TerminationReasonOrStr] = Field(default=UNSET, alias="terminationReason")
    credit_preference: CreditPreferenceOrStr = Field(alias="creditPreference")
    rollover_balance: int = Field(alias="rolloverBalance")
    """Temporary carried-over requests remaining."""

    credit_balance: int = Field(alias="creditBalance")
    results_url: Optional[str] = Field(default=UNSET, alias="resultsUrl")
    error: OptionalNullable[str] = UNSET
    summary: Optional[MaxSummary] = UNSET
    delivery: Optional[Delivery2] = UNSET
    items: Optional[list[SoldItem]] = UNSET
    expires_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="expiresAt")
    purchase_credits_url: Optional[str] = Field(default=UNSET, alias="purchaseCreditsUrl")
    upgrade_url: Optional[str] = Field(default=UNSET, alias="upgradeUrl")


class MaxJobDict(TypedDict):
    job_id: UUID
    status: StatusCompSniperMarketplaceAndShippingScrapeApiOrStr
    keyword: str
    max_pages: int
    pages_done: int
    items_found: int
    total_results: NotRequired[str | None]
    created_at: RFC3339DateTime
    started_at: NotRequired[RFC3339DateTime | None]
    completed_at: NotRequired[RFC3339DateTime | None]
    updated_at: RFC3339DateTime
    progress: NotRequired[MaxProgressDict]
    termination_reason: NotRequired[TerminationReasonOrStr | None]
    credit_preference: CreditPreferenceOrStr
    rollover_balance: int
    credit_balance: int
    results_url: NotRequired[str]
    error: NotRequired[str | None]
    summary: NotRequired[MaxSummaryDict]
    delivery: NotRequired[Delivery2Dict]
    items: NotRequired[list[SoldItemDict]]
    expires_at: NotRequired[RFC3339DateTime]
    purchase_credits_url: NotRequired[str]
    upgrade_url: NotRequired[str]
