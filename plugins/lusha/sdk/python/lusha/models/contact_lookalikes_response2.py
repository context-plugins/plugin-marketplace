from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .contact_lookalikes_meta import ContactLookalikesMeta, ContactLookalikesMetaDict
from .lookalike_contact_result import LookalikeContactResult, LookalikeContactResultDict


class ContactLookalikesResponse2(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    dedupe_session_id: UUID | None = Field(alias="dedupeSessionId")
    results: list[LookalikeContactResult]
    meta: ContactLookalikesMeta
    credits_charged: Optional[int] = Field(default=UNSET, alias="creditsCharged")


class ContactLookalikesResponse2Dict(TypedDict):
    dedupe_session_id: UUID | None
    results: list[LookalikeContactResultDict]
    meta: ContactLookalikesMetaDict
    credits_charged: NotRequired[int]
