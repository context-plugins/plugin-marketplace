from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MediaPublishRequest(SdkBaseModel):
    creation_id: str
    """The container ID from createMediaContainer."""

    access_token: str


class MediaPublishRequestDict(TypedDict):
    creation_id: str
    access_token: str
