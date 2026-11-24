from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EncryptionSetting(SdkBaseModel):
    kms_key_arn: Optional[str] = Field(default=UNSET, alias="kmsKeyArn")
    """The KMS key ARN used to encrypt the metadata associated with the bot recommendation."""

    bot_locale_export_password: Optional[str] = Field(default=UNSET, alias="botLocaleExportPassword")
    """The password used to encrypt the recommended bot recommendation file."""

    associated_transcripts_password: Optional[str] = Field(default=UNSET, alias="associatedTranscriptsPassword")
    """The password used to encrypt the associated transcript file."""


class EncryptionSettingDict(TypedDict):
    kms_key_arn: NotRequired[str]
    bot_locale_export_password: NotRequired[str]
    associated_transcripts_password: NotRequired[str]
