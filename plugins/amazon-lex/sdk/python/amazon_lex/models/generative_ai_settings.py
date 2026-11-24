from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .buildtime_settings import BuildtimeSettings, BuildtimeSettingsDict
from .runtime_settings import RuntimeSettings, RuntimeSettingsDict


class GenerativeAiSettings(SdkBaseModel):
    runtime_settings: Optional[RuntimeSettings] = Field(default=UNSET, alias="runtimeSettings")
    buildtime_settings: Optional[BuildtimeSettings] = Field(default=UNSET, alias="buildtimeSettings")


class GenerativeAiSettingsDict(TypedDict):
    runtime_settings: NotRequired[RuntimeSettingsDict]
    buildtime_settings: NotRequired[BuildtimeSettingsDict]
