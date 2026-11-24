from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FoldersResponse(SdkBaseModel):
    id: str
    """The ID of the deleted folder."""


class FoldersResponseDict(TypedDict):
    id: str
