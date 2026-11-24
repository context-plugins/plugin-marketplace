from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .contact_identifiers_batch import ContactIdentifiersBatch, ContactIdentifiersBatchDict


class ContactLookalikesRequest(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    dedupe_session_id: Optional[UUID] = Field(default=UNSET, alias="dedupeSessionId")
    seeds: ContactIdentifiersBatch | None
    exclude: OptionalNullable[ContactIdentifiersBatch] = UNSET
    limit: int = 25
    table_id: Optional[str] = Field(default=UNSET, alias="tableId")
    """Optional. If provided, results are also persisted to this table. See the Tables API."""


class ContactLookalikesRequestDict(TypedDict):
    dedupe_session_id: NotRequired[UUID]
    seeds: ContactIdentifiersBatchDict | None
    exclude: NotRequired[ContactIdentifiersBatchDict | None]
    limit: NotRequired[int]
    table_id: NotRequired[str]
