from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateEnvironmentRequest(SdkBaseModel):
    """Parameters for creating or updating an environment."""

    name: str
    """Display name for the environment."""

    domain: Optional[str] = UNSET
    """Custom domain for the environment."""


class CreateEnvironmentRequestDict(TypedDict):
    name: str
    domain: NotRequired[str]
