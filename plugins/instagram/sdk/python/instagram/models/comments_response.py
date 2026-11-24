from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CommentsResponse(SdkBaseModel):
    id: Optional[str] = UNSET


class CommentsResponseDict(TypedDict):
    id: NotRequired[str]
