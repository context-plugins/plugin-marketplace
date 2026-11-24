from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BuildInfo(SdkBaseModel):
    """Native Build Info"""

    build_key: Optional[str] = Field(default=UNSET, alias="buildKey")
    """Optional. Build key."""

    build_value: Optional[str] = Field(default=UNSET, alias="buildValue")
    """Optional. Build value."""


class BuildInfoDict(TypedDict):
    build_key: NotRequired[str]
    build_value: NotRequired[str]
