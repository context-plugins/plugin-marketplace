from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Value1(SdkBaseModel):
    application_version: Optional[str] = Field(default=UNSET, alias="applicationVersion")
    platform_version: Optional[str] = Field(default=UNSET, alias="platformVersion")


class Value1Dict(TypedDict):
    application_version: NotRequired[str]
    platform_version: NotRequired[str]
