from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.scope import ScopeOrStr


class DataFileGroup(SdkBaseModel):
    """A readable folder: the shared team folder, or one member's own files.

    ``membership_id`` is null for the team folder, which no single member owns."""

    scope: ScopeOrStr
    membership_id: int
    file_count: int


class DataFileGroupDict(TypedDict):
    scope: ScopeOrStr
    membership_id: int
    file_count: int
