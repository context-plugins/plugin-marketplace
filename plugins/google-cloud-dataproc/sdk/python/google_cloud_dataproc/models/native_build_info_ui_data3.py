from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .build_info import BuildInfo, BuildInfoDict


class NativeBuildInfoUiData3(SdkBaseModel):
    """Native SQL Execution Data"""

    build_info: Optional[list[BuildInfo]] = Field(default=UNSET, alias="buildInfo")
    """Optional. Build related details."""

    build_class: Optional[str] = Field(default=UNSET, alias="buildClass")
    """Optional. Build class of Native."""


class NativeBuildInfoUiData3Dict(TypedDict):
    build_info: NotRequired[list[BuildInfoDict]]
    build_class: NotRequired[str]
