from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Asset2(SdkBaseModel):
    """A media asset stored in the stack."""

    uid: Optional[str] = UNSET
    """Unique identifier of the asset."""

    title: Optional[str] = UNSET
    """Display name of the asset."""

    url: Optional[str] = UNSET
    """URL to access the asset file."""

    filename: Optional[str] = UNSET
    """Original file name of the uploaded file."""

    content_type: Optional[str] = UNSET
    """MIME type of the asset."""

    file_size: Optional[str] = UNSET
    """File size in bytes."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the asset was created."""


class Asset2Dict(TypedDict):
    uid: NotRequired[str]
    title: NotRequired[str]
    url: NotRequired[str]
    filename: NotRequired[str]
    content_type: NotRequired[str]
    file_size: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
