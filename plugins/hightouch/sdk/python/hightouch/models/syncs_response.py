from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .sync import Sync, SyncDict


class SyncsResponse(SdkBaseModel):
    has_more: bool = Field(alias="hasMore")
    data: list[Sync]


class SyncsResponseDict(TypedDict):
    has_more: bool
    data: list[SyncDict]
