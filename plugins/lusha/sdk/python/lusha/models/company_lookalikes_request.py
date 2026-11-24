from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_identifiers_batch import CompanyIdentifiersBatch, CompanyIdentifiersBatchDict


class CompanyLookalikesRequest(SdkBaseModel):
    dedupe_session_id: Optional[UUID] = Field(default=UNSET, alias="dedupeSessionId")
    seeds: CompanyIdentifiersBatch
    exclude: Optional[CompanyIdentifiersBatch] = UNSET
    limit: int = 25
    table_id: Optional[str] = Field(default=UNSET, alias="tableId")
    """Optional. If provided, results are also persisted to this table. See the Tables API."""


class CompanyLookalikesRequestDict(TypedDict):
    dedupe_session_id: NotRequired[UUID]
    seeds: CompanyIdentifiersBatchDict
    exclude: NotRequired[CompanyIdentifiersBatchDict]
    limit: NotRequired[int]
    table_id: NotRequired[str]
