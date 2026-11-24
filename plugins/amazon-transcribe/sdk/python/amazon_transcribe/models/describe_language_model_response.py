from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .language_model import LanguageModel, LanguageModelDict


class DescribeLanguageModelResponse(SdkBaseModel):
    language_model: Optional[LanguageModel] = Field(default=UNSET, alias="LanguageModel")


class DescribeLanguageModelResponseDict(TypedDict):
    language_model: NotRequired[LanguageModelDict]
