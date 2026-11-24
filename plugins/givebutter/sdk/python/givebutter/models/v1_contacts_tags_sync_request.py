from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1ContactsTagsSyncRequest(SdkBaseModel):
    tags: list[str]


class V1ContactsTagsSyncRequestDict(TypedDict):
    tags: list[str]
