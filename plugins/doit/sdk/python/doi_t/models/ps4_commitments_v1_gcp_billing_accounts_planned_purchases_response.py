from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .gcp_planned_purchase_by_service import GcpPlannedPurchaseByService, GcpPlannedPurchaseByServiceDict


class Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse(SdkBaseModel):
    items: list[GcpPlannedPurchaseByService]
    page_token: OptionalNullable[str] = Field(default=UNSET, alias="pageToken")
    row_count: int = Field(alias="rowCount")
    """Number of service groups in ``items`` for this response."""


class Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponseDict(TypedDict):
    items: list[GcpPlannedPurchaseByServiceDict]
    page_token: NotRequired[str | None]
    row_count: int
