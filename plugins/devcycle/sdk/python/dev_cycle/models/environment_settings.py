from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EnvironmentSettings(SdkBaseModel):
    app_icon_uri: Optional[str] = Field(default=UNSET, alias="appIconURI")
    """A unique App Icon URI for a given environment"""


class EnvironmentSettingsDict(TypedDict):
    app_icon_uri: NotRequired[str]
