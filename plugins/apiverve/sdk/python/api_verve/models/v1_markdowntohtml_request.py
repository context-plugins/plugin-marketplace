from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class V1MarkdowntohtmlRequest(SdkBaseModel):
    markdown: str
    """Markdown text to convert (max 100,000 characters)"""


class V1MarkdowntohtmlRequestDict(TypedDict):
    markdown: str
