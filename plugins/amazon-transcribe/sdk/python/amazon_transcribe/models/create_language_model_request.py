from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .encryption_configuration import EncryptionConfiguration, EncryptionConfigurationDict
from .enums.base_model_name import BaseModelNameOrStr
from .enums.language_code_amazon_transcribe_service_language_model_api import (
    LanguageCodeAmazonTranscribeServiceLanguageModelApiOrStr,
)
from .input_data_config import InputDataConfig, InputDataConfigDict
from .tag_model import TagModel, TagModelDict


class CreateLanguageModelRequest(SdkBaseModel):
    language_code: LanguageCodeAmazonTranscribeServiceLanguageModelApiOrStr = Field(alias="LanguageCode")
    """The language code that represents the language of your model. Each custom language model must contain terms in
    only one language, and the language you select for your custom language model must match the language of your
    training and tuning data. For a list of supported languages and their associated language codes, refer to the
    Supported languages table. Note that US English (en-US) is the only language supported with Amazon Transcribe
    Medical. A custom language model can only be used to transcribe files in the same language as the model. For
    example, if you create a custom language model usi"""

    base_model_name: BaseModelNameOrStr = Field(alias="BaseModelName")
    """The Amazon Transcribe standard language model, or base model, used to create your custom language model. Amazon
    Transcribe offers two options for base models: Wideband and Narrowband. If the audio you want to transcribe has a
    sample rate of 16,000 Hz or greater, choose WideBand. To transcribe audio with a sample rate less than 16,000 Hz,
    choose NarrowBand."""

    model_name: str = Field(alias="ModelName")
    """A unique name, chosen by you, for your custom language model. This name is case sensitive, cannot contain spaces,
    and must be unique within an Amazon Web Services account. If you try to create a new custom language model with the
    same name as an existing custom language model, you get a ConflictException error."""

    input_data_config: InputDataConfig = Field(alias="InputDataConfig")
    encryption_configuration: Optional[EncryptionConfiguration] = Field(default=UNSET, alias="EncryptionConfiguration")
    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """Adds one or more custom tags, each in the form of a key:value pair, to a new custom language model at the time
    you create this new model. To learn more about using tags with Amazon Transcribe, refer to Tagging resources."""


class CreateLanguageModelRequestDict(TypedDict):
    language_code: LanguageCodeAmazonTranscribeServiceLanguageModelApiOrStr
    base_model_name: BaseModelNameOrStr
    model_name: str
    input_data_config: InputDataConfigDict
    encryption_configuration: NotRequired[EncryptionConfigurationDict]
    tags: NotRequired[list[TagModelDict]]
