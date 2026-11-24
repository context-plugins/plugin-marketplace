from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Stack(SdkBaseModel):
    """A Contentstack stack, which is an independent content repository."""

    api_key: Optional[str] = UNSET
    """Unique API key identifying the stack."""

    uid: Optional[str] = UNSET
    """Unique identifier of the stack."""

    name: Optional[str] = UNSET
    """Display name of the stack."""

    description: Optional[str] = UNSET
    """Description of the stack's purpose."""

    master_locale: Optional[str] = UNSET
    """The default locale code for the stack."""

    org_uid: Optional[str] = UNSET
    """UID of the organization that owns the stack."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the stack was created."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the stack was last updated."""


class StackDict(TypedDict):
    api_key: NotRequired[str]
    uid: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    master_locale: NotRequired[str]
    org_uid: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
