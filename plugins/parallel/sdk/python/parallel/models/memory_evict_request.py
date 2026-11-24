from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.kind3 import Kind3OrStr


class MemoryEvictRequest(SdkBaseModel):
    memory_scope_key: Optional[str] = UNSET
    """User-provided key identifying the memory scope to use. Omit to use personal memory, if available."""

    kind: Kind3OrStr
    """Kind of source to evict: ``task``, ``monitor``, or ``findall``."""

    id: str
    """ID of the task run, monitor, or FindAll run to evict."""


class MemoryEvictRequestDict(TypedDict):
    memory_scope_key: NotRequired[str]
    kind: Kind3OrStr
    id: str
