from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AccessControlRequestRequest(SdkBaseModel):
    email: Literal["email"] = "email"
    """Email address requesting access"""


class AccessControlRequestRequestDict(TypedDict):
    email: Literal["email"]
