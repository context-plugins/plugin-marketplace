from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .sync_template import SyncTemplate, SyncTemplateDict


class SyncTemplatesResponse(SdkBaseModel):
    data: list[SyncTemplate]


class SyncTemplatesResponseDict(TypedDict):
    data: list[SyncTemplateDict]
