from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .commitment_policy import CommitmentPolicy, CommitmentPolicyDict


class Ps4CommitmentsV1GeneralPoliciesResponse(SdkBaseModel):
    items: list[CommitmentPolicy]
    page_token: str | None = Field(alias="pageToken")
    """Opaque cursor for the next page. ``null`` when this is the last page."""

    row_count: int = Field(alias="rowCount")
    """Total number of policies available to the tenant across all pages."""


class Ps4CommitmentsV1GeneralPoliciesResponseDict(TypedDict):
    items: list[CommitmentPolicyDict]
    page_token: str | None
    row_count: int
