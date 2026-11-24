from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class InputDataConfig(SdkBaseModel):
    s3_uri: str = Field(alias="S3Uri")
    """The Amazon S3 location (URI) of the text files you want to use to train your custom language model. Here's an
    example URI path: s3://DOC-EXAMPLE-BUCKET/my-model-training-data/"""

    tuning_data_s3_uri: Optional[str] = Field(default=UNSET, alias="TuningDataS3Uri")
    """The Amazon S3 location (URI) of the text files you want to use to tune your custom language model. Here's an
    example URI path: s3://DOC-EXAMPLE-BUCKET/my-model-tuning-data/"""

    data_access_role_arn: str = Field(alias="DataAccessRoleArn")
    """The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains
    your input files. If the role that you specify doesn’t have the appropriate permissions to access the specified
    Amazon S3 location, your request fails. IAM role ARNs have the format
    arn:partition:iam::account:role/role-name-with-path. For example: arn:aws:iam::111122223333:role/Admin. For more
    information, see IAM ARNs."""


class InputDataConfigDict(TypedDict):
    s3_uri: str
    tuning_data_s3_uri: NotRequired[str]
    data_access_role_arn: str
