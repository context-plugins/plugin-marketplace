from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class Account(SdkBaseModel):
    """An authenticated connection to an external service for use in automations."""

    uid: Optional[str] = UNSET
    """Unique identifier of the account connection."""

    name: Optional[str] = UNSET
    """Display name of the account connection."""

    service: Optional[str] = UNSET
    """The name of the external service (e.g., Slack, SendGrid)."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the account connection was created."""


class AccountDict(TypedDict):
    uid: NotRequired[str]
    name: NotRequired[str]
    service: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
