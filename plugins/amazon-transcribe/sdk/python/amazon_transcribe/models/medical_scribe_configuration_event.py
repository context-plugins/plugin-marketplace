from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.vocabulary_filter_method1 import VocabularyFilterMethod1OrStr
from .medical_scribe_context import MedicalScribeContext, MedicalScribeContextDict
from .medical_scribe_encryption_settings import MedicalScribeEncryptionSettings, MedicalScribeEncryptionSettingsDict
from .medical_scribe_post_stream_analytics_settings import (
    MedicalScribePostStreamAnalyticsSettings,
    MedicalScribePostStreamAnalyticsSettingsDict,
)
from .transcribestreaming_medical_scribe_channel_definition import (
    TranscribestreamingMedicalScribeChannelDefinition,
    TranscribestreamingMedicalScribeChannelDefinitionDict,
)


class MedicalScribeConfigurationEvent(SdkBaseModel):
    vocabulary_name: Optional[str] = Field(default=UNSET, alias="VocabularyName")
    """Specify the name of the custom vocabulary you want to use for your streaming session. Custom vocabulary names are
    case-sensitive."""

    vocabulary_filter_name: Optional[str] = Field(default=UNSET, alias="VocabularyFilterName")
    """Specify the name of the custom vocabulary filter you want to include in your streaming session. Custom vocabulary
    filter names are case-sensitive. If you include VocabularyFilterName in the MedicalScribeConfigurationEvent, you
    must also include VocabularyFilterMethod."""

    vocabulary_filter_method: Optional[VocabularyFilterMethod1OrStr] = Field(
        default=UNSET, alias="VocabularyFilterMethod"
    )
    """Specify how you want your custom vocabulary filter applied to the streaming session. To replace words with ***,
    specify mask. To delete words, specify remove. To flag words without changing them, specify tag."""

    resource_access_role_arn: str = Field(alias="ResourceAccessRoleArn")
    """The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 output bucket you
    specified, and use your KMS key if supplied. If the role that you specify doesn’t have the appropriate permissions,
    your request fails. IAM role ARNs have the format arn:partition:iam::account:role/role-name-with-path. For example:
    arn:aws:iam::111122223333:role/Admin. For more information, see Amazon Web Services HealthScribe."""

    channel_definitions: Optional[list[TranscribestreamingMedicalScribeChannelDefinition]] = Field(
        default=UNSET, alias="ChannelDefinitions"
    )
    """Specify which speaker is on which audio channel."""

    encryption_settings: Optional[MedicalScribeEncryptionSettings] = Field(default=UNSET, alias="EncryptionSettings")
    post_stream_analytics_settings: MedicalScribePostStreamAnalyticsSettings = Field(
        alias="PostStreamAnalyticsSettings"
    )
    medical_scribe_context: Optional[MedicalScribeContext] = Field(default=UNSET, alias="MedicalScribeContext")


class MedicalScribeConfigurationEventDict(TypedDict):
    vocabulary_name: NotRequired[str]
    vocabulary_filter_name: NotRequired[str]
    vocabulary_filter_method: NotRequired[VocabularyFilterMethod1OrStr]
    resource_access_role_arn: str
    channel_definitions: NotRequired[list[TranscribestreamingMedicalScribeChannelDefinitionDict]]
    encryption_settings: NotRequired[MedicalScribeEncryptionSettingsDict]
    post_stream_analytics_settings: MedicalScribePostStreamAnalyticsSettingsDict
    medical_scribe_context: NotRequired[MedicalScribeContextDict]
