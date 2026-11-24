from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .preset import Preset, PresetDict


class ApiV1MiscFacebookTextFormatPresetsResponse(SdkBaseModel):
    presets: list[Preset]


class ApiV1MiscFacebookTextFormatPresetsResponseDict(TypedDict):
    presets: list[PresetDict]
