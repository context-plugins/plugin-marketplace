from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class FeatureSettingsDto(SdkBaseModel):
    public_name: str = Field(alias="publicName")
    public_description: str = Field(alias="publicDescription")
    opt_in_enabled: bool = Field(alias="optInEnabled")


class FeatureSettingsDtoDict(TypedDict):
    public_name: str
    public_description: str
    opt_in_enabled: bool
