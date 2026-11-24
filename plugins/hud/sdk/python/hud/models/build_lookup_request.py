from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BuildLookupRequest(SdkBaseModel):
    content_digests: list[str]


class BuildLookupRequestDict(TypedDict):
    content_digests: list[str]
