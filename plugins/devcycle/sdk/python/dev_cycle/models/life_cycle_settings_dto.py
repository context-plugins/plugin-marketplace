from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LifeCycleSettingsDto(SdkBaseModel):
    disable_code_ref_checks: bool = Field(alias="disableCodeRefChecks")


class LifeCycleSettingsDtoDict(TypedDict):
    disable_code_ref_checks: bool
