from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dominant_language import DominantLanguage, DominantLanguageDict


class DetectDominantLanguageResponse(SdkBaseModel):
    languages: Optional[list[DominantLanguage]] = Field(default=UNSET, alias="Languages")
    """Array of languages that Amazon Comprehend detected in the input text. The array is sorted in descending order of
    the score (the dominant language is always the first element in the array). For each language, the response returns
    the RFC 5646 language code and the level of confidence that Amazon Comprehend has in the accuracy of its inference.
    For more information about RFC 5646, see Tags for Identifying Languages on the IETF Tools web site."""


class DetectDominantLanguageResponseDict(TypedDict):
    languages: NotRequired[list[DominantLanguageDict]]
