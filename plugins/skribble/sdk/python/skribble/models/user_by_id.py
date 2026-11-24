from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class UserById(SdkBaseModel):
    user_id: str
    """Unique user identifier."""


class UserByIdDict(TypedDict):
    user_id: str
