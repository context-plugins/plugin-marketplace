from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Identity(SdkBaseModel):
    id: int
    """Identity identifier"""

    name: str
    """Identity name"""

    user_id: int
    """Owner user ID"""

    created_at: str
    """Creation timestamp"""

    persistence_status: str
    is_default: bool
    documents_count: int
    """Number of documents in this identity"""


class IdentityDict(TypedDict):
    id: int
    name: str
    user_id: int
    created_at: str
    persistence_status: str
    is_default: bool
    documents_count: int
