from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.platform import PlatformOrStr
from .environment_language import EnvironmentLanguage, EnvironmentLanguageDict


class EnvironmentPlatform(SdkBaseModel):
    platform: Optional[PlatformOrStr] = UNSET
    """The platform's name."""

    languages: Optional[list[EnvironmentLanguage]] = UNSET
    """The list of programming languages that are available for the specified platform."""


class EnvironmentPlatformDict(TypedDict):
    platform: NotRequired[PlatformOrStr]
    languages: NotRequired[list[EnvironmentLanguageDict]]
