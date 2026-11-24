from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_contentstack_environments_api import StatusContentstackEnvironmentsApiOrStr


class Environment2(SdkBaseModel):
    """A deployment environment within a Launch project."""

    uid: Optional[str] = UNSET
    """Unique identifier of the environment."""

    name: Optional[str] = UNSET
    """Display name of the environment."""

    domain: Optional[str] = UNSET
    """The custom domain assigned to this environment."""

    status: Optional[StatusContentstackEnvironmentsApiOrStr] = UNSET
    """Current status of the environment."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the environment was created."""


class Environment2Dict(TypedDict):
    uid: NotRequired[str]
    name: NotRequired[str]
    domain: NotRequired[str]
    status: NotRequired[StatusContentstackEnvironmentsApiOrStr]
    created_at: NotRequired[RFC3339DateTime]
