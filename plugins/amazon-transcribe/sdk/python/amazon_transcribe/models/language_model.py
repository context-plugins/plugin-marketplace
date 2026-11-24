from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .encryption_configuration import EncryptionConfiguration, EncryptionConfigurationDict
from .enums.base_model_name2 import BaseModelName2OrStr
from .enums.language_code2 import LanguageCode2OrStr
from .enums.model_status1 import ModelStatus1OrStr
from .input_data_config import InputDataConfig, InputDataConfigDict


class LanguageModel(SdkBaseModel):
    model_name: Optional[str] = Field(default=UNSET, alias="ModelName")
    """A unique name, chosen by you, for your custom language model. This name is case sensitive, cannot contain spaces,
    and must be unique within an Amazon Web Services account."""

    create_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreateTime")
    """The date and time the specified custom language model was created. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4,
    2022."""

    last_modified_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModifiedTime")
    """The date and time the specified custom language model was last modified. Timestamps are in the format
    YYYY-MM-DD'T'HH:MM:SS.SSSSSS-UTC. For example, 2022-05-04T12:32:58.761000-07:00 represents 12:32 PM UTC-7 on May 4,
    2022."""

    language_code: Optional[LanguageCode2OrStr] = Field(default=UNSET, alias="LanguageCode")
    """The language code used to create your custom language model. Each custom language model must contain terms in
    only one language, and the language you select for your custom language model must match the language of your
    training and tuning data. For a list of supported languages and their associated language codes, refer to the
    Supported languages table. Note that US English (en-US) is the only language supported with Amazon Transcribe
    Medical."""

    base_model_name: Optional[BaseModelName2OrStr] = Field(default=UNSET, alias="BaseModelName")
    """The Amazon Transcribe standard language model, or base model, used to create your custom language model."""

    model_status: Optional[ModelStatus1OrStr] = Field(default=UNSET, alias="ModelStatus")
    """The status of the specified custom language model. When the status displays as COMPLETED the model is ready for
    use."""

    upgrade_availability: Optional[bool] = Field(default=UNSET, alias="UpgradeAvailability")
    """Shows if a more current base model is available for use with the specified custom language model. If false, your
    custom language model is using the most up-to-date base model. If true, there is a newer base model available than
    the one your language model is using. Note that to update a base model, you must recreate the custom language model
    using the new base model. Base model upgrades for existing custom language models are not supported."""

    failure_reason: Optional[str] = Field(default=UNSET, alias="FailureReason")
    """If ModelStatus is FAILED, FailureReason contains information about why the custom language model request failed.
    See also: Common Errors."""

    input_data_config: Optional[InputDataConfig] = Field(default=UNSET, alias="InputDataConfig")
    encryption_configuration: Optional[EncryptionConfiguration] = Field(default=UNSET, alias="EncryptionConfiguration")


class LanguageModelDict(TypedDict):
    model_name: NotRequired[str]
    create_time: NotRequired[RFC3339DateTime]
    last_modified_time: NotRequired[RFC3339DateTime]
    language_code: NotRequired[LanguageCode2OrStr]
    base_model_name: NotRequired[BaseModelName2OrStr]
    model_status: NotRequired[ModelStatus1OrStr]
    upgrade_availability: NotRequired[bool]
    failure_reason: NotRequired[str]
    input_data_config: NotRequired[InputDataConfigDict]
    encryption_configuration: NotRequired[EncryptionConfigurationDict]
