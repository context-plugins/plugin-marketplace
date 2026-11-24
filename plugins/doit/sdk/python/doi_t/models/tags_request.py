from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TagsRequest(SdkBaseModel):
    """Request body for adding (POST) or removing (DELETE) tags on a support request. The operation is surgical — only
    the tags listed are affected; any other tags on the ticket are preserved."""

    tags: list[str]
    """List of tags to add or remove. Customer-submitted tags are auto-prefixed with ``customer_tag/``."""


class TagsRequestDict(TypedDict):
    tags: list[str]
