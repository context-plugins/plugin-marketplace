from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.operation2 import Operation2OrStr
from .enums.sync_draft_status import SyncDraftStatusOrStr


class RelatedDraft(SdkBaseModel):
    """A pending draft on a resource the sync depends on. Approving the sync draft does not approve it."""

    model_config = ConfigDict(extra="forbid")

    id: str
    model_id: str = Field(alias="modelId")
    operation: Operation2OrStr
    status: SyncDraftStatusOrStr
    """The state of a sync draft. New values may be added, so treat an unknown value as closed."""


class RelatedDraftDict(TypedDict):
    id: str
    model_id: str
    operation: Operation2OrStr
    status: SyncDraftStatusOrStr
