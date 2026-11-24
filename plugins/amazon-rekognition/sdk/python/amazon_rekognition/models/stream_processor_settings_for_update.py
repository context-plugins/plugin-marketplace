from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .connected_home_settings_for_update import ConnectedHomeSettingsForUpdate, ConnectedHomeSettingsForUpdateDict


class StreamProcessorSettingsForUpdate(SdkBaseModel):
    connected_home_for_update: Optional[ConnectedHomeSettingsForUpdate] = Field(
        default=UNSET, alias="ConnectedHomeForUpdate"
    )


class StreamProcessorSettingsForUpdateDict(TypedDict):
    connected_home_for_update: NotRequired[ConnectedHomeSettingsForUpdateDict]
