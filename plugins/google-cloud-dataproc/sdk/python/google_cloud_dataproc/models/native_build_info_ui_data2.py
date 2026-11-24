from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .build_info import BuildInfo, BuildInfoDict


class NativeBuildInfoUiData2(SdkBaseModel):
    """Native Build Info Data"""

    build_info: Optional[list[BuildInfo]] = Field(default=UNSET, alias="buildInfo")
    """Optional. Build related details."""

    build_class: Optional[str] = Field(default=UNSET, alias="buildClass")
    """Optional. Build class of Native."""


class NativeBuildInfoUiData2Dict(TypedDict):
    build_info: NotRequired[list[BuildInfoDict]]
    build_class: NotRequired[str]
