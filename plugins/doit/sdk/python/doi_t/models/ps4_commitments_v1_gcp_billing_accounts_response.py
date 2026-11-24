from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .gcp_billing_account import GcpBillingAccount, GcpBillingAccountDict


class Ps4CommitmentsV1GcpBillingAccountsResponse(SdkBaseModel):
    items: list[GcpBillingAccount]
    page_token: OptionalNullable[str] = Field(default=UNSET, alias="pageToken")
    row_count: OptionalNullable[int] = Field(default=UNSET, alias="rowCount")
    """Best-effort count for the filtered result set. May be null or omitted for expensive counts."""


class Ps4CommitmentsV1GcpBillingAccountsResponseDict(TypedDict):
    items: list[GcpBillingAccountDict]
    page_token: NotRequired[str | None]
    row_count: NotRequired[int | None]
