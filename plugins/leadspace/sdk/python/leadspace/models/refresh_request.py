from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RefreshRequest(SdkBaseModel):
    user: str
    refresh_token: str = Field(alias="refreshToken")


class RefreshRequestDict(TypedDict):
    user: str
    refresh_token: str
