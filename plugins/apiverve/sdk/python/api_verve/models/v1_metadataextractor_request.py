from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1MetadataextractorRequest(SdkBaseModel):
    url: str
    """The URL of the web page to extract metadata from"""


class V1MetadataextractorRequestDict(TypedDict):
    url: str
