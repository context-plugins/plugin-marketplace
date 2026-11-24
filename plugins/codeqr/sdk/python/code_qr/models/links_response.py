from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LinksResponse(SdkBaseModel):
    id: str
    """The ID of the link."""


class LinksResponseDict(TypedDict):
    id: str
