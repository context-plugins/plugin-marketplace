from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1ContactsTagsAddRequest(SdkBaseModel):
    tags: list[str]


class V1ContactsTagsAddRequestDict(TypedDict):
    tags: list[str]
