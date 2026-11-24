from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MemoryClearRequest(SdkBaseModel):
    memory_scope_key: Optional[str] = UNSET
    """User-provided key identifying the memory scope to use. Omit to use personal memory, if available."""


class MemoryClearRequestDict(TypedDict):
    memory_scope_key: NotRequired[str]
