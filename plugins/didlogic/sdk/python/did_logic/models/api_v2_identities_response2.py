from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApiV2IdentitiesResponse2(SdkBaseModel):
    message: str
    """Success message"""

    identity_id: int
    """Archived identity ID"""


class ApiV2IdentitiesResponse2Dict(TypedDict):
    message: str
    identity_id: int
