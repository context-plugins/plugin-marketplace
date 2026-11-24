from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1ContactsTagsRemoveRequest(SdkBaseModel):
    tags: list[str]


class V1ContactsTagsRemoveRequestDict(TypedDict):
    tags: list[str]
