from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ModelSettings(SdkBaseModel):
    language_model_name: Optional[str] = Field(default=UNSET, alias="LanguageModelName")
    """The name of the custom language model you want to use when processing your transcription job. Note that custom
    language model names are case sensitive. The language of the specified custom language model must match the language
    code that you specify in your transcription request. If the languages do not match, the custom language model isn't
    applied. There are no errors or warnings associated with a language mismatch."""


class ModelSettingsDict(TypedDict):
    language_model_name: NotRequired[str]
