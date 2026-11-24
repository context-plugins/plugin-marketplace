from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.content_redaction_output import ContentRedactionOutputOrStr


class PostCallAnalyticsSettings(SdkBaseModel):
    output_location: str = Field(alias="OutputLocation")
    """The Amazon S3 location where you want your Call Analytics post-call transcription output stored. You can use any
    of the following formats to specify the output location: s3://DOC-EXAMPLE-BUCKET
    s3://DOC-EXAMPLE-BUCKET/my-output-folder/ s3://DOC-EXAMPLE-BUCKET/my-output-folder/my-call-analytics-job.json"""

    data_access_role_arn: str = Field(alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains
    your input files. If the role that you specify doesn’t have the appropriate permissions to access the specified
    Amazon S3 location, your request fails. IAM role ARNs have the format
    arn:partition:iam::account:role/role-name-with-path. For example: arn:aws:iam::111122223333:role/Admin. For more
    information, see IAM ARNs."""

    content_redaction_output: Optional[ContentRedactionOutputOrStr] = Field(
        default=UNSET, alias="ContentRedactionOutput"
    )
    """Specify whether you want only a redacted transcript or both a redacted and an unredacted transcript. If you
    choose redacted and unredacted, two JSON files are generated and stored in the Amazon S3 output location you
    specify. Note that to include ContentRedactionOutput in your request, you must enable content redaction
    (ContentRedactionType)."""

    output_encryption_kms_key_id: Optional[str] = Field(default=UNSET, alias="OutputEncryptionKMSKeyId")
    """The KMS key you want to use to encrypt your Call Analytics post-call output. If using a key located in the
    current Amazon Web Services account, you can specify your KMS key in one of four ways: Use the KMS key ID itself.
    For example, 1234abcd-12ab-34cd-56ef-1234567890ab. Use an alias for the KMS key ID. For example, alias/ExampleAlias.
    Use the Amazon Resource Name (ARN) for the KMS key ID. For example,
    arn:aws:kms:region:account-ID:key/1234abcd-12ab-34cd-56ef-1234567890ab. Use the ARN for the KMS key alias. For
    example, arn:aws:kms:region:account-ID:alias/ExampleAlias. If using a key located i"""


class PostCallAnalyticsSettingsDict(TypedDict):
    output_location: str
    data_access_role_arn: str
    content_redaction_output: NotRequired[ContentRedactionOutputOrStr]
    output_encryption_kms_key_id: NotRequired[str]
