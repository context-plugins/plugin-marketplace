from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_identifiers_batch import CompanyIdentifiersBatch, CompanyIdentifiersBatchDict


class CompanyLookalikesRequest2(SdkBaseModel):
    dedupe_session_id: Optional[UUID] = Field(default=UNSET, alias="dedupeSessionId")
    seeds: CompanyIdentifiersBatch
    exclude: Optional[CompanyIdentifiersBatch] = UNSET
    limit: int = 25


class CompanyLookalikesRequest2Dict(TypedDict):
    dedupe_session_id: NotRequired[UUID]
    seeds: CompanyIdentifiersBatchDict
    exclude: NotRequired[CompanyIdentifiersBatchDict]
    limit: NotRequired[int]
