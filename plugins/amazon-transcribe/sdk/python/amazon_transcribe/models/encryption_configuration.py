from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EncryptionConfiguration(SdkBaseModel):
    kms_encryption_context: Optional[dict[str, str]] = Field(default=UNSET, alias="KMSEncryptionContext")
    """A map of plain text, non-secret key:value pairs, known as encryption context pairs, that provide an added layer
    of security for your data. For more information, see KMS encryption context."""

    kms_key: str = Field(alias="KMSKey")
    """The Amazon Resource Name (ARN) of the KMS key you want to use to encrypt your resource artifacts. Only full KMS
    key ARN format is supported. KMS key ARNs have the format arn:partition:kms:region:account:key/key-id. For example:
    arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab. For more information, see KMS key
    ARNs."""


class EncryptionConfigurationDict(TypedDict):
    kms_encryption_context: NotRequired[dict[str, str]]
    kms_key: str
