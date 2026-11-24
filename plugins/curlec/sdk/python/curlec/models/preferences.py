from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Preferences(SdkBaseModel):
    show_default_blocks: Optional[bool] = UNSET


class PreferencesDict(TypedDict):
    show_default_blocks: NotRequired[bool]
