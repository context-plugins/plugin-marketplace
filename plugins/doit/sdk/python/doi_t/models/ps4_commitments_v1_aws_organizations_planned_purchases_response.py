from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .aws_planned_purchase import AwsPlannedPurchase, AwsPlannedPurchaseDict


class Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponse(SdkBaseModel):
    items: list[AwsPlannedPurchase]
    page_token: OptionalNullable[str] = Field(default=UNSET, alias="pageToken")
    row_count: int = Field(alias="rowCount")
    """Number of items in ``items`` for this response."""


class Ps4CommitmentsV1AwsOrganizationsPlannedPurchasesResponseDict(TypedDict):
    items: list[AwsPlannedPurchaseDict]
    page_token: NotRequired[str | None]
    row_count: int
