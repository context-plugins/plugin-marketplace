from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PostTemplate(SdkBaseModel):
    id: str
    """The prefixed ID of the post template."""

    name: str
    """The name of the post template."""


class PostTemplateDict(TypedDict):
    id: str
    name: str
