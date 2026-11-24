from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DynatraceProjectSettingsDto(SdkBaseModel):
    enabled: Optional[bool] = UNSET
    environment_map: Optional[Any] = Field(default=UNSET, alias="environmentMap")


class DynatraceProjectSettingsDtoDict(TypedDict):
    enabled: NotRequired[bool]
    environment_map: NotRequired[Any]
