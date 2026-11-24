from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MediaPublishResponse(SdkBaseModel):
    id: Optional[str] = UNSET
    """The published media ID."""


class MediaPublishResponseDict(TypedDict):
    id: NotRequired[str]
