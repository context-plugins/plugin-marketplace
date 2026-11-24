from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class UploadResponse(SdkBaseModel):
    duplicate_of: OptionalNullable[int] = UNSET
    """Set when the bytes matched a recording already in the workspace: nothing was stored or transcribed, no minutes
    were used, and ``item_id`` is the existing recording."""

    item_id: int
    """ID of the newly-created item. Fetch full metadata at ``GET /api/items/{id}``. When ``duplicate_of`` is set, this
    is that existing item."""

    message: str
    """Human-readable status message (e.g. ``"queued for transcription"``)."""

    success: bool


class UploadResponseDict(TypedDict):
    duplicate_of: NotRequired[int | None]
    item_id: int
    message: str
    success: bool
