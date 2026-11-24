from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DetectDominantLanguageRequest(SdkBaseModel):
    text: str = Field(alias="Text")
    """A UTF-8 text string. The string must contain at least 20 characters. The maximum string size is 100 KB."""


class DetectDominantLanguageRequestDict(TypedDict):
    text: str
