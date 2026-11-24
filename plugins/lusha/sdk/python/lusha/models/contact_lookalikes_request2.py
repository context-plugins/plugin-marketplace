from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .contact_identifiers_batch2 import ContactIdentifiersBatch2, ContactIdentifiersBatch2Dict


class ContactLookalikesRequest2(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    dedupe_session_id: Optional[UUID] = Field(default=UNSET, alias="dedupeSessionId")
    seeds: ContactIdentifiersBatch2 | None
    exclude: OptionalNullable[ContactIdentifiersBatch2] = UNSET
    limit: int = 25


class ContactLookalikesRequest2Dict(TypedDict):
    dedupe_session_id: NotRequired[UUID]
    seeds: ContactIdentifiersBatch2Dict | None
    exclude: NotRequired[ContactIdentifiersBatch2Dict | None]
    limit: NotRequired[int]
