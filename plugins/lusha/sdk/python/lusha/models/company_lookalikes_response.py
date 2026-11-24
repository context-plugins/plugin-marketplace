from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_lookalikes_meta import CompanyLookalikesMeta, CompanyLookalikesMetaDict
from .table_write import TableWrite, TableWriteDict
from .v3_billing import V3Billing, V3BillingDict
from .v3_look_alike_company_result import V3LookAlikeCompanyResult, V3LookAlikeCompanyResultDict


class CompanyLookalikesResponse(SdkBaseModel):
    dedupe_session_id: UUID = Field(alias="dedupeSessionId")
    results: list[V3LookAlikeCompanyResult]
    meta: CompanyLookalikesMeta
    table_write: Optional[TableWrite] = Field(default=UNSET, alias="tableWrite")
    """Added to a Prospecting, Enrich, Signals, or Lookalike response when ``tableId`` is passed on the request. The
    primary response is unaffected even if the table write fails."""

    billing: Optional[V3Billing] = UNSET
    """Credit usage summary for a V3 API request"""


class CompanyLookalikesResponseDict(TypedDict):
    dedupe_session_id: UUID
    results: list[V3LookAlikeCompanyResultDict]
    meta: CompanyLookalikesMetaDict
    table_write: NotRequired[TableWriteDict]
    billing: NotRequired[V3BillingDict]
