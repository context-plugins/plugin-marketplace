from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.service6 import Service6OrStr
from .gcp_planned_purchase import GcpPlannedPurchase, GcpPlannedPurchaseDict


class GcpPlannedPurchaseByService(SdkBaseModel):
    """Planned purchase projections for one PS4C product line."""

    service: Service6OrStr
    """Commitment type this projection group belongs to."""

    billing_account_id: str = Field(alias="billingAccountId")
    """GCP Billing Account ID."""

    regions: list[GcpPlannedPurchase]
    """Per-region projection entries for this service, sorted with ``global`` first, then remaining regions
    alphabetically."""


class GcpPlannedPurchaseByServiceDict(TypedDict):
    service: Service6OrStr
    billing_account_id: str
    regions: list[GcpPlannedPurchaseDict]
