from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .contact_lookalikes_meta import ContactLookalikesMeta, ContactLookalikesMetaDict
from .table_write import TableWrite, TableWriteDict
from .v3_billing import V3Billing, V3BillingDict
from .v3_look_alike_contact_result import V3LookAlikeContactResult, V3LookAlikeContactResultDict


class ContactLookalikesResponse(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    dedupe_session_id: UUID | None = Field(alias="dedupeSessionId")
    results: list[V3LookAlikeContactResult]
    meta: ContactLookalikesMeta
    table_write: Optional[TableWrite] = Field(default=UNSET, alias="tableWrite")
    """Added to a Prospecting, Enrich, Signals, or Lookalike response when ``tableId`` is passed on the request. The
    primary response is unaffected even if the table write fails."""

    billing: Optional[V3Billing] = UNSET
    """Credit usage summary for a V3 API request"""


class ContactLookalikesResponseDict(TypedDict):
    dedupe_session_id: UUID | None
    results: list[V3LookAlikeContactResultDict]
    meta: ContactLookalikesMetaDict
    table_write: NotRequired[TableWriteDict]
    billing: NotRequired[V3BillingDict]
