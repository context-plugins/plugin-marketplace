from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DominantLanguage(SdkBaseModel):
    language_code: Optional[str] = Field(default=UNSET, alias="LanguageCode")
    """The RFC 5646 language code for the dominant language. For more information about RFC 5646, see Tags for
    Identifying Languages on the IETF Tools web site."""

    score: Optional[float] = Field(default=UNSET, alias="Score")
    """The level of confidence that Amazon Comprehend has in the accuracy of the detection."""


class DominantLanguageDict(TypedDict):
    language_code: NotRequired[str]
    score: NotRequired[float]
