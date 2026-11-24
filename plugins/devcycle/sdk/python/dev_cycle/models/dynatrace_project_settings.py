from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DynatraceProjectSettings(SdkBaseModel):
    enabled: bool
    environment_map: Any = Field(alias="environmentMap")


class DynatraceProjectSettingsDict(TypedDict):
    enabled: bool
    environment_map: Any
