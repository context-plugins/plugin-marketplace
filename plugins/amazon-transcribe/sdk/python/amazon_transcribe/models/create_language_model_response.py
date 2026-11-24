from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.base_model_name1 import BaseModelName1OrStr
from .enums.language_code1_amazon_transcribe_service_language_model_api import (
    LanguageCode1AmazonTranscribeServiceLanguageModelApiOrStr,
)
from .enums.model_status import ModelStatusOrStr
from .input_data_config import InputDataConfig, InputDataConfigDict


class CreateLanguageModelResponse(SdkBaseModel):
    language_code: Optional[LanguageCode1AmazonTranscribeServiceLanguageModelApiOrStr] = Field(
        default=UNSET, alias="LanguageCode"
    )
    """The language code you selected for your custom language model."""

    base_model_name: Optional[BaseModelName1OrStr] = Field(default=UNSET, alias="BaseModelName")
    """The Amazon Transcribe standard language model, or base model, you specified when creating your custom language
    model."""

    model_name: Optional[str] = Field(default=UNSET, alias="ModelName")
    """The name of your custom language model."""

    input_data_config: Optional[InputDataConfig] = Field(default=UNSET, alias="InputDataConfig")
    model_status: Optional[ModelStatusOrStr] = Field(default=UNSET, alias="ModelStatus")
    """The status of your custom language model. When the status displays as COMPLETED, your model is ready to use."""


class CreateLanguageModelResponseDict(TypedDict):
    language_code: NotRequired[LanguageCode1AmazonTranscribeServiceLanguageModelApiOrStr]
    base_model_name: NotRequired[BaseModelName1OrStr]
    model_name: NotRequired[str]
    input_data_config: NotRequired[InputDataConfigDict]
    model_status: NotRequired[ModelStatusOrStr]
