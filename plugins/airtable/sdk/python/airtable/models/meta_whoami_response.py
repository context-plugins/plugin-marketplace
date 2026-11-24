from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MetaWhoamiResponse(SdkBaseModel):
    id: Optional[str] = UNSET
    """The ID of the authenticated user or service account."""

    scopes: Optional[list[str]] = UNSET
    """The list of scopes authorized for this token."""


class MetaWhoamiResponseDict(TypedDict):
    id: NotRequired[str]
    scopes: NotRequired[list[str]]
