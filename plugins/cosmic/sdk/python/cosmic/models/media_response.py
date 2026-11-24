from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .media import Media, MediaDict


class MediaResponse(SdkBaseModel):
    media: Media
    """An image, file, or document in the Bucket."""


class MediaResponseDict(TypedDict):
    media: MediaDict
