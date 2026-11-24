from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .aws_access_key2 import AwsAccessKey2, AwsAccessKey2Dict


class AwsS3Data2(SdkBaseModel):
    """Optional. An AWS S3 data source."""

    path: Optional[str] = UNSET
    """Root path to transfer objects. Must be an empty string or full path name that ends with a '/'. This field is
    treated as an object prefix. As such, it should generally not begin with a '/'."""

    bucket_name: Optional[str] = Field(default=UNSET, alias="bucketName")
    """Required. S3 Bucket name (see `Creating a bucket
    <https://docs.aws.amazon.com/AmazonS3/latest/dev/create-bucket-get-location-example.html>`__)."""

    credentials_secret: Optional[str] = Field(default=UNSET, alias="credentialsSecret")
    """Optional. The Resource name of a secret in Secret Manager. AWS credentials must be stored in Secret Manager in
    JSON format: { "access_key_id": "ACCESS_KEY_ID", "secret_access_key": "SECRET_ACCESS_KEY" } GoogleServiceAccount
    must be granted ``roles/secretmanager.secretAccessor`` for the resource. See [Configure access to a source: Amazon
    S3] (https://cloud.google.com/storage-transfer/docs/source-amazon-s3#secret_manager) for more information. If
    ``credentials_secret`` is specified, do not specify role_arn or aws_access_key. Format:
    ``projects/{project_number}/secrets/{secret_name}``"""

    aws_access_key: Optional[AwsAccessKey2] = Field(default=UNSET, alias="awsAccessKey")
    """Input only. AWS access key used to sign the API requests to the AWS S3 bucket. Permissions on the bucket must be
    granted to the access ID of the AWS access key. For information on our data retention policy for user credentials,
    see `User credentials </storage-transfer/docs/data-retention#user-credentials>`__."""

    managed_private_network: Optional[bool] = Field(default=UNSET, alias="managedPrivateNetwork")
    """Egress bytes over a Google-managed private network. This network is shared between other users of Storage
    Transfer Service."""

    role_arn: Optional[str] = Field(default=UNSET, alias="roleArn")
    """The Amazon Resource Name (ARN) of the role to support temporary credentials via ``AssumeRoleWithWebIdentity``.
    For more information about ARNs, see `IAM ARNs
    <https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-arns>`__. When a role ARN
    is provided, Transfer Service fetches temporary credentials for the session using a ``AssumeRoleWithWebIdentity``
    call for the provided role using the GoogleServiceAccount for this project."""

    private_network_service: Optional[str] = Field(default=UNSET, alias="privateNetworkService")
    """Service Directory Service to be used as the endpoint for transfers from a custom VPC. Format:
    ``projects/{project_id}/locations/{location}/namespaces/{namespace}/services/{service}``"""

    cloudfront_domain: Optional[str] = Field(default=UNSET, alias="cloudfrontDomain")
    """Optional. The CloudFront distribution domain name pointing to this bucket, to use when fetching. See `Transfer
    from S3 via CloudFront <https://cloud.google.com/storage-transfer/docs/s3-cloudfront>`__ for more information.
    Format: ``https://{id}.cloudfront.net`` or any valid custom domain. Must begin with ``https://``."""


class AwsS3Data2Dict(TypedDict):
    path: NotRequired[str]
    bucket_name: NotRequired[str]
    credentials_secret: NotRequired[str]
    aws_access_key: NotRequired[AwsAccessKey2Dict]
    managed_private_network: NotRequired[bool]
    role_arn: NotRequired[str]
    private_network_service: NotRequired[str]
    cloudfront_domain: NotRequired[str]
