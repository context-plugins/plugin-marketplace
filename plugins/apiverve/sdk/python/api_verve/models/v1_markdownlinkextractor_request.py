from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1MarkdownlinkextractorRequest(SdkBaseModel):
    markdown: str
    """Markdown text to parse (max 100,000 characters)"""


class V1MarkdownlinkextractorRequestDict(TypedDict):
    markdown: str
