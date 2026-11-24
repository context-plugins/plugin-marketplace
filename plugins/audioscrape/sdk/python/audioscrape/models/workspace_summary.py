from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class WorkspaceSummary(SdkBaseModel):
    description: OptionalNullable[str] = UNSET
    id: int
    is_current: bool
    """Whether this is the workspace the authenticating API key (or session) is scoped to — the one searches, uploads,
    and quotas run against."""

    member_count: int
    name: str
    role: str
    """The calling user's role in this workspace: ``owner``, ``admin``, or ``member``."""

    slug: str
    """Stable URL slug, e.g. ``audioscrape``."""


class WorkspaceSummaryDict(TypedDict):
    description: NotRequired[str | None]
    id: int
    is_current: bool
    member_count: int
    name: str
    role: str
    slug: str
