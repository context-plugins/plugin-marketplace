from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Identity2(SdkBaseModel):
    """Created identity details"""

    id: int
    """Identity identifier"""

    name: str
    """Identity name"""

    user_id: int
    """Owner user ID"""

    created_at: str
    persistence_status: str
    is_default: bool
    documents_count: int


class Identity2Dict(TypedDict):
    id: int
    name: str
    user_id: int
    created_at: str
    persistence_status: str
    is_default: bool
    documents_count: int
