from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class WorkspaceSizeInfo(SdkBaseModel):
    used_bytes: int = Field(alias="usedBytes")
    """Current workspace storage usage in bytes."""

    max_bytes: int = Field(alias="maxBytes")
    """Maximum workspace storage allowed in bytes."""


class WorkspaceSizeInfoDict(TypedDict):
    used_bytes: int
    max_bytes: int
