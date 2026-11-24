from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AwsAccessKey2(SdkBaseModel):
    """Input only. AWS access key used to sign the API requests to the AWS S3 bucket. Permissions on the bucket must be
    granted to the access ID of the AWS access key. For information on our data retention policy for user credentials,
    see `User credentials </storage-transfer/docs/data-retention#user-credentials>`__."""

    secret_access_key: Optional[str] = Field(default=UNSET, alias="secretAccessKey")
    """Required. AWS secret access key. This field is not returned in RPC responses."""

    access_key_id: Optional[str] = Field(default=UNSET, alias="accessKeyId")
    """Required. AWS access key ID."""


class AwsAccessKey2Dict(TypedDict):
    secret_access_key: NotRequired[str]
    access_key_id: NotRequired[str]
