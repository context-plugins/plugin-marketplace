from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .aws_organization import AwsOrganization, AwsOrganizationDict


class Ps4CommitmentsV1AwsOrganizationsResponse(SdkBaseModel):
    items: list[AwsOrganization]
    page_token: OptionalNullable[str] = Field(default=UNSET, alias="pageToken")
    row_count: OptionalNullable[int] = Field(default=UNSET, alias="rowCount")
    """Best-effort count for the filtered result set. May be null or omitted for expensive counts."""


class Ps4CommitmentsV1AwsOrganizationsResponseDict(TypedDict):
    items: list[AwsOrganizationDict]
    page_token: NotRequired[str | None]
    row_count: NotRequired[int | None]
