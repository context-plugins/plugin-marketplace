from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class User(SdkBaseModel):
    """The account the key belongs to"""

    id: int
    """Account ID"""

    email: str
    """Account email"""


class UserDict(TypedDict):
    id: int
    email: str
