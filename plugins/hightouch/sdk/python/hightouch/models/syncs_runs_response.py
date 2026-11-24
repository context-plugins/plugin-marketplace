from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .sync_run_hightouch_syncs_api import SyncRunHightouchSyncsApi, SyncRunHightouchSyncsApiDict


class SyncsRunsResponse(SdkBaseModel):
    has_more: bool = Field(alias="hasMore")
    data: list[SyncRunHightouchSyncsApi]


class SyncsRunsResponseDict(TypedDict):
    has_more: bool
    data: list[SyncRunHightouchSyncsApiDict]
