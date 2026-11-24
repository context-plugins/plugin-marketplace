from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .connected_home_settings import ConnectedHomeSettings, ConnectedHomeSettingsDict
from .face_search_settings import FaceSearchSettings, FaceSearchSettingsDict


class StreamProcessorSettings(SdkBaseModel):
    face_search: Optional[FaceSearchSettings] = Field(default=UNSET, alias="FaceSearch")
    connected_home: Optional[ConnectedHomeSettings] = Field(default=UNSET, alias="ConnectedHome")


class StreamProcessorSettingsDict(TypedDict):
    face_search: NotRequired[FaceSearchSettingsDict]
    connected_home: NotRequired[ConnectedHomeSettingsDict]
