from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class MeWorkspace(SdkBaseModel):
    id: int
    name: str
    role: OptionalNullable[str] = UNSET
    """Your role in this workspace (``owner``, ``admin``, or ``member``). ``null`` when the authenticated user has no
    membership row here."""

    slug: str
    """Stable URL slug, e.g. ``audioscrape``."""


class MeWorkspaceDict(TypedDict):
    id: int
    name: str
    role: NotRequired[str | None]
    slug: str
