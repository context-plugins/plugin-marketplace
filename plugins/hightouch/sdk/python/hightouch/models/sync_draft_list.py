from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .sync_draft import SyncDraft, SyncDraftDict


class SyncDraftList(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    data: list[SyncDraft]
    next_cursor: str | None = Field(alias="nextCursor")
    """Pass as ``cursor`` to read the next page; null on the last page. A page can hold fewer than ``limit`` drafts and
    still have a next page."""


class SyncDraftListDict(TypedDict):
    data: list[SyncDraftDict]
    next_cursor: str | None
