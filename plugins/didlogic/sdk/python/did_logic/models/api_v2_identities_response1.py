from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .identity2 import Identity2, Identity2Dict


class ApiV2IdentitiesResponse1(SdkBaseModel):
    message: str
    """Success message"""

    identity_id: int
    """Created identity ID"""

    identity: Identity2
    """Created identity details"""


class ApiV2IdentitiesResponse1Dict(TypedDict):
    message: str
    identity_id: int
    identity: Identity2Dict
