from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .gcp_spend_cud import GcpSpendCud, GcpSpendCudDict


class Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponse(SdkBaseModel):
    items: list[GcpSpendCud]
    page_token: OptionalNullable[str] = Field(default=UNSET, alias="pageToken")
    row_count: OptionalNullable[int] = Field(default=UNSET, alias="rowCount")
    """Best-effort count for the filtered result set. May be null or omitted for expensive counts."""


class Ps4CommitmentsV1GcpBillingAccountsSpendBasedResponseDict(TypedDict):
    items: list[GcpSpendCudDict]
    page_token: NotRequired[str | None]
    row_count: NotRequired[int | None]
