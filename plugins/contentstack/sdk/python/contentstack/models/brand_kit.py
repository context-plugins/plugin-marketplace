from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class BrandKit(SdkBaseModel):
    """A Brand Kit containing centralized brand identity assets and AI configuration."""

    uid: Optional[str] = UNSET
    """Unique identifier of the Brand Kit."""

    name: Optional[str] = UNSET
    """Display name of the Brand Kit."""

    description: Optional[str] = UNSET
    """Description of the Brand Kit's purpose and scope."""

    organization_uid: Optional[str] = UNSET
    """UID of the organization that owns the Brand Kit."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the Brand Kit was created."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the Brand Kit was last updated."""


class BrandKitDict(TypedDict):
    uid: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    organization_uid: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
