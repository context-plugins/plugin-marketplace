from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MedicalScribeEncryptionSettings(SdkBaseModel):
    kms_encryption_context: Optional[dict[str, str]] = Field(default=UNSET, alias="KmsEncryptionContext")
    """A map of plain text, non-secret key:value pairs, known as encryption context pairs, that provide an added layer
    of security for your data. For more information, see KMSencryption context and Asymmetric keys in KMS ."""

    kms_key_id: str = Field(alias="KmsKeyId")
    """The ID of the KMS key you want to use for your streaming session. You can specify its KMS key ID, key Amazon
    Resource Name (ARN), alias name, or alias ARN. When using an alias name, prefix it with "alias/". To specify a KMS
    key in a different Amazon Web Services account, you must use the key ARN or alias ARN. For example: Key ID:
    1234abcd-12ab-34cd-56ef-1234567890ab Key ARN:
    arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab Alias name: alias/ExampleAlias Alias
    ARN: arn:aws:kms:us-east-2:111122223333:alias/ExampleAlias To get the key ID and key ARN for a KMS key, use t"""


class MedicalScribeEncryptionSettingsDict(TypedDict):
    kms_encryption_context: NotRequired[dict[str, str]]
    kms_key_id: str
