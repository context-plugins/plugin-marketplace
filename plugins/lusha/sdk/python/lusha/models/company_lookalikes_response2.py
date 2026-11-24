from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_lookalikes_meta import CompanyLookalikesMeta, CompanyLookalikesMetaDict
from .lookalike_company_result import LookalikeCompanyResult, LookalikeCompanyResultDict


class CompanyLookalikesResponse2(SdkBaseModel):
    dedupe_session_id: UUID = Field(alias="dedupeSessionId")
    results: list[LookalikeCompanyResult]
    meta: CompanyLookalikesMeta
    credits_charged: Optional[int] = Field(default=UNSET, alias="creditsCharged")


class CompanyLookalikesResponse2Dict(TypedDict):
    dedupe_session_id: UUID
    results: list[LookalikeCompanyResultDict]
    meta: CompanyLookalikesMetaDict
    credits_charged: NotRequired[int]
