from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.language_code5 import LanguageCode5OrStr


class ContainsPiiEntitiesRequest(SdkBaseModel):
    text: str = Field(alias="Text")
    """A UTF-8 text string. The maximum string size is 100 KB."""

    language_code: LanguageCode5OrStr = Field(alias="LanguageCode")
    """The language of the input documents."""


class ContainsPiiEntitiesRequestDict(TypedDict):
    text: str
    language_code: LanguageCode5OrStr
