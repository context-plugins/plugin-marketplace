from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OutputDataConfig(SdkBaseModel):
    s3_uri: str = Field(alias="S3Uri")
    """When you use the OutputDataConfig object with asynchronous operations, you specify the Amazon S3 location where
    you want to write the output data. The URI must be in the same Region as the API endpoint that you are calling. The
    location is used as the prefix for the actual location of the output file. When the topic detection job is finished,
    the service creates an output file in a directory specific to the job. The S3Uri field contains the location of the
    output file, called output.tar.gz. It is a compressed archive that contains the ouput of the operation. For a PII
    entity detection job, the"""

    kms_key_id: Optional[str] = Field(default=UNSET, alias="KmsKeyId")
    """ID for the Amazon Web Services Key Management Service (KMS) key that Amazon Comprehend uses to encrypt the output
    results from an analysis job. Specify the Key Id of a symmetric key, because you cannot use an asymmetric key for
    uploading data to S3. The KmsKeyId can be one of the following formats: KMS Key ID:
    "1234abcd-12ab-34cd-56ef-1234567890ab" Amazon Resource Name (ARN) of a KMS Key:
    "arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab" KMS Key Alias: "alias/ExampleAlias"
    ARN of a KMS Key Alias: "arn:aws:kms:us-west-2:111122223333:alias/ExampleAlias"
    """


class OutputDataConfigDict(TypedDict):
    s3_uri: str
    kms_key_id: NotRequired[str]
