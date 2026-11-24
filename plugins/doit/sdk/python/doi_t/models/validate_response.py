from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ValidateResponse(SdkBaseModel):
    """A response confirming caller's domain and email."""

    domain: Optional[str] = UNSET
    email: Optional[str] = UNSET
    permissions: Optional[list[str]] = UNSET
    """The caller's own effective permission names (e.g. "CloudAnalyticsReadOnly"), not opaque permission IDs. Empty for
    a DoiT employee token, which is not scoped to a fixed permission set."""


class ValidateResponseDict(TypedDict):
    domain: NotRequired[str]
    email: NotRequired[str]
    permissions: NotRequired[list[str]]
