from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class DocumentClassifierOutputDataConfig(SdkBaseModel):
    s3_uri: Optional[str] = Field(default=UNSET, alias="S3Uri")
    """When you use the OutputDataConfig object while creating a custom classifier, you specify the Amazon S3 location
    where you want to write the confusion matrix and other output files. The URI must be in the same Region as the API
    endpoint that you are calling. The location is used as the prefix for the actual location of this output file. When
    the custom classifier job is finished, the service creates the output file in a directory specific to the job. The
    S3Uri field contains the location of the output file, called output.tar.gz. It is a compressed archive that contains
    the confusion matrix."""

    kms_key_id: Optional[str] = Field(default=UNSET, alias="KmsKeyId")
    """ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the output
    results from an analysis job. The KmsKeyId can be one of the following formats: KMS Key ID:
    "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key:
    "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab" KMS Key Alias: "alias/ExampleAlias"
    ARN of a KMS Key Alias: "arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"
    """

    flywheel_stats_s3_prefix: Optional[str] = Field(default=UNSET, alias="FlywheelStatsS3Prefix")
    """The Amazon S3 prefix for the data lake location of the flywheel statistics."""


class DocumentClassifierOutputDataConfigDict(TypedDict):
    s3_uri: NotRequired[str]
    kms_key_id: NotRequired[str]
    flywheel_stats_s3_prefix: NotRequired[str]
