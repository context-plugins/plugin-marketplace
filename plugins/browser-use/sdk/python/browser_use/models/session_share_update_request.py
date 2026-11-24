from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SessionShareUpdateRequest(SdkBaseModel):
    is_active: bool = Field(alias="isActive")


class SessionShareUpdateRequestDict(TypedDict):
    is_active: bool
