from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.kind import KindOrStr


class MemoryRetrieveRequest(SdkBaseModel):
    query: Optional[str] = UNSET
    """Concise query describing the memories to retrieve. Empty queries return the most recent memories."""

    limit: int = 10
    """Maximum number of memories to return."""

    kind: Optional[KindOrStr] = UNSET
    """Filter memories by kind: ``task``, ``monitor``, or ``findall``."""

    since: Optional[RFC3339DateTime] = UNSET
    """Only return memories sourced from task, monitor, or FindAll runs completed at or after this RFC 3339
    timestamp."""

    memory_scope_key: Optional[str] = UNSET
    """User-provided key identifying the memory scope to use. Omit to use personal memory, if available."""


class MemoryRetrieveRequestDict(TypedDict):
    query: NotRequired[str]
    limit: NotRequired[int]
    kind: NotRequired[KindOrStr]
    since: NotRequired[RFC3339DateTime]
    memory_scope_key: NotRequired[str]
