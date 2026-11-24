from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateAudienceRequest(SdkBaseModel):
    """Parameters for creating or updating an audience."""

    name: str
    """Display name for the audience."""

    description: Optional[str] = UNSET
    """Description of the audience targeting criteria."""

    rules: Optional[Any] = UNSET
    """Logical conditions for audience membership."""


class CreateAudienceRequestDict(TypedDict):
    name: str
    description: NotRequired[str]
    rules: NotRequired[Any]
