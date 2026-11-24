from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.language import LanguageOrStr
from .environment_image import EnvironmentImage, EnvironmentImageDict


class EnvironmentLanguage(SdkBaseModel):
    language: Optional[LanguageOrStr] = UNSET
    """The programming language for the Docker images."""

    images: Optional[list[EnvironmentImage]] = UNSET
    """The list of Docker images that are related by the specified programming language."""


class EnvironmentLanguageDict(TypedDict):
    language: NotRequired[LanguageOrStr]
    images: NotRequired[list[EnvironmentImageDict]]
