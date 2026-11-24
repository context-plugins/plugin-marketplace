from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Relationship(SdkBaseModel):
    kind: str
    """Relationship type (e.g. ``management``, ``ownership``)."""

    role: str | None
    """Role label (e.g. ``PREZES ZARZĄDU``), if available."""


class RelationshipDict(TypedDict):
    kind: str
    role: str | None
