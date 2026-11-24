from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.persistence_status import PersistenceStatusOrStr


class IdentityDidlogicComKycDocumentsApi(SdkBaseModel):
    """Identity details"""

    id: int
    """Identity identifier"""

    name: str
    """Identity name"""

    user_id: int
    """Owner user ID"""

    created_at: str
    """Identity creation timestamp"""

    persistence_status: PersistenceStatusOrStr
    """Identity persistence status"""

    is_default: bool
    """Is default identity flag"""


class IdentityDidlogicComKycDocumentsApiDict(TypedDict):
    id: int
    name: str
    user_id: int
    created_at: str
    persistence_status: PersistenceStatusOrStr
    is_default: bool
