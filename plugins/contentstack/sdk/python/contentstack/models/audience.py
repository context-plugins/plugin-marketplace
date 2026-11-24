from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Audience(SdkBaseModel):
    """An audience segment based on attribute rules and user behaviors."""

    uid: Optional[str] = UNSET
    """Unique identifier of the audience."""

    name: Optional[str] = UNSET
    """Display name of the audience."""

    description: Optional[str] = UNSET
    """Description of the audience and its targeting criteria."""

    rules: Optional[Any] = UNSET
    """Logical conditions that determine audience membership."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the audience was created."""


class AudienceDict(TypedDict):
    uid: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    rules: NotRequired[Any]
    created_at: NotRequired[RFC3339DateTime]
