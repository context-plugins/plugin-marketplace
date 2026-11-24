from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .source import Source, SourceDict


class SourcesResponse(SdkBaseModel):
    data: list[Source]


class SourcesResponseDict(TypedDict):
    data: list[SourceDict]
