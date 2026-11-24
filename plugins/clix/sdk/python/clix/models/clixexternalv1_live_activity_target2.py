from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Clixexternalv1LiveActivityTarget2(SdkBaseModel):
    user_id: str
    """ID of the target user."""


class Clixexternalv1LiveActivityTarget2Dict(TypedDict):
    user_id: str
