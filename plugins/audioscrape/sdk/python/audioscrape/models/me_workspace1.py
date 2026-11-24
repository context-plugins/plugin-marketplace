from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class MeWorkspace1(SdkBaseModel):
    """Workspace this request is scoped to (resolved from the API key or the session's active workspace). List all your
    workspaces at ``/api/workspaces``."""

    id: int
    name: str
    role: OptionalNullable[str] = UNSET
    """Your role in this workspace (``owner``, ``admin``, or ``member``). ``null`` when the authenticated user has no
    membership row here."""

    slug: str
    """Stable URL slug, e.g. ``audioscrape``."""


class MeWorkspace1Dict(TypedDict):
    id: int
    name: str
    role: NotRequired[str | None]
    slug: str
