from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cache_attributes import CacheAttributes, CacheAttributesDict
from .enums.encryption_type import EncryptionTypeOrStr
from .enums.object_acl import ObjectAclOrStr
from .nfs_file_share_defaults import NfsFileShareDefaults, NfsFileShareDefaultsDict
from .tag_model import TagModel, TagModelDict


class CreateNfsFileShareInput(SdkBaseModel):
    client_token: str = Field(alias="ClientToken")
    """A unique string value that you supply that is used by S3 File Gateway to ensure idempotent file share
    creation."""

    nfs_file_share_defaults: Optional[NfsFileShareDefaults] = Field(default=UNSET, alias="NFSFileShareDefaults")
    gateway_arn: str = Field(alias="GatewayARN")
    """The Amazon Resource Name (ARN) of the S3 File Gateway on which you want to create a file share."""

    encryption_type: Optional[EncryptionTypeOrStr] = Field(default=UNSET, alias="EncryptionType")
    """A value that specifies the type of server-side encryption that the file share will use for the data that it
    stores in Amazon S3. We recommend using EncryptionType instead of KMSEncrypted to set the file share encryption
    method. You do not need to provide values for both parameters. If values for both parameters exist in the same
    request, then the specified encryption methods must not conflict. For example, if EncryptionType is SseS3, then
    KMSEncrypted must be false. If EncryptionType is SseKms or DsseKms, then KMSEncrypted must be true."""

    kms_encrypted: Optional[bool] = Field(default=UNSET, alias="KMSEncrypted")
    """Optional. Set to true to use Amazon S3 server-side encryption with your own KMS key (SSE-KMS), or false to use a
    key managed by Amazon S3 (SSE-S3). To use dual-layer encryption (DSSE-KMS), set the EncryptionType parameter
    instead. We recommend using EncryptionType instead of KMSEncrypted to set the file share encryption method. You do
    not need to provide values for both parameters. If values for both parameters exist in the same request, then the
    specified encryption methods must not conflict. For example, if EncryptionType is SseS3, then KMSEncrypted must be
    false. If EncryptionType is SseKms"""

    kms_key: Optional[str] = Field(default=UNSET, alias="KMSKey")
    """Optional. The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side
    encryption. Storage Gateway does not support asymmetric CMKs. This value must be set if KMSEncrypted is true, or if
    EncryptionType is SseKms or DsseKms."""

    role: str = Field(alias="Role")
    """The ARN of the Identity and Access Management (IAM) role that an S3 File Gateway assumes when it accesses the
    underlying storage."""

    location_arn: str = Field(alias="LocationARN")
    """A custom ARN for the backend storage used for storing data for file shares. It includes a resource ARN with an
    optional prefix concatenation. The prefix must end with a forward slash (/). You can specify LocationARN as a bucket
    ARN, access point ARN or access point alias, as shown in the following examples. Bucket ARN:
    arn:aws:s3:::amzn-s3-demo-bucket/prefix/ Access point ARN:
    arn:aws:s3:region:account-id:accesspoint/access-point-name/prefix/ If you specify an access point, the bucket policy
    must be configured to delegate access control to the access point. For information, see Delegating acce"""

    default_storage_class: Optional[str] = Field(default=UNSET, alias="DefaultStorageClass")
    """The default storage class for objects put into an Amazon S3 bucket by the S3 File Gateway. The default value is
    S3_STANDARD. Optional. Valid Values: S3_STANDARD | S3_INTELLIGENT_TIERING | S3_STANDARD_IA | S3_ONEZONE_IA"""

    object_acl: Optional[ObjectAclOrStr] = Field(default=UNSET, alias="ObjectACL")
    """A value that sets the access control list (ACL) permission for objects in the S3 bucket that a S3 File Gateway
    puts objects into. The default value is private."""

    client_list: Optional[list[str]] = Field(default=UNSET, alias="ClientList")
    """The list of clients that are allowed to access the S3 File Gateway. The list must contain either valid IPv4/IPv6
    addresses or valid CIDR blocks."""

    squash: Optional[str] = Field(default=UNSET, alias="Squash")
    """A value that maps a user to anonymous user. Valid values are the following: RootSquash: Only root is mapped to
    anonymous user. NoSquash: No one is mapped to anonymous user. AllSquash: Everyone is mapped to anonymous user."""

    read_only: Optional[bool] = Field(default=UNSET, alias="ReadOnly")
    """A value that sets the write status of a file share. Set this value to true to set the write status to read-only,
    otherwise set to false. Valid Values: true | false"""

    guess_mime_type_enabled: Optional[bool] = Field(default=UNSET, alias="GuessMIMETypeEnabled")
    """A value that enables guessing of the MIME type for uploaded objects based on file extensions. Set this value to
    true to enable MIME type guessing, otherwise set to false. The default value is true. Valid Values: true | false"""

    requester_pays: Optional[bool] = Field(default=UNSET, alias="RequesterPays")
    """A value that sets who pays the cost of the request and the cost associated with data download from the S3 bucket.
    If this value is set to true, the requester pays the costs; otherwise, the S3 bucket owner pays. However, the S3
    bucket owner always pays the cost of storing data. RequesterPays is a configuration for the S3 bucket that backs the
    file share, so make sure that the configuration on the file share is the same as the S3 bucket configuration. Valid
    Values: true | false"""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """A list of up to 50 tags that can be assigned to the NFS file share. Each tag is a key-value pair. Valid
    characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following
    special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for
    a tag's value is 256."""

    file_share_name: Optional[str] = Field(default=UNSET, alias="FileShareName")
    """The name of the file share. Optional. FileShareName must be set if an S3 prefix name is set in LocationARN, or if
    an access point or access point alias is used. A valid NFS file share name can only contain the following
    characters: a-z, A-Z, 0-9, -, ., and _."""

    cache_attributes: Optional[CacheAttributes] = Field(default=UNSET, alias="CacheAttributes")
    notification_policy: Optional[str] = Field(default=UNSET, alias="NotificationPolicy")
    """The notification policy of the file share. SettlingTimeInSeconds controls the number of seconds to wait after the
    last point in time a client wrote to a file before generating an ObjectUploaded notification. Because clients can
    make many small writes to files, it's best to set this parameter for as long as possible to avoid generating
    multiple notifications for the same file in a small time period. SettlingTimeInSeconds has no effect on the timing
    of the object uploading to Amazon S3, only the timing of the notification. This setting is not meant to specify an
    exact time at which the notificat"""

    vpc_endpoint_dns_name: Optional[str] = Field(default=UNSET, alias="VPCEndpointDNSName")
    """Specifies the DNS name for the VPC endpoint that the NFS file share uses to connect to Amazon S3. This parameter
    is required for NFS file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access
    point alias that points to a VPC access point."""

    bucket_region: Optional[str] = Field(default=UNSET, alias="BucketRegion")
    """Specifies the Region of the S3 bucket where the NFS file share stores files. This parameter is required for NFS
    file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that
    points to a VPC access point."""

    audit_destination_arn: Optional[str] = Field(default=UNSET, alias="AuditDestinationARN")
    """The Amazon Resource Name (ARN) of the storage used for audit logs."""


class CreateNfsFileShareInputDict(TypedDict):
    client_token: str
    nfs_file_share_defaults: NotRequired[NfsFileShareDefaultsDict]
    gateway_arn: str
    encryption_type: NotRequired[EncryptionTypeOrStr]
    kms_encrypted: NotRequired[bool]
    kms_key: NotRequired[str]
    role: str
    location_arn: str
    default_storage_class: NotRequired[str]
    object_acl: NotRequired[ObjectAclOrStr]
    client_list: NotRequired[list[str]]
    squash: NotRequired[str]
    read_only: NotRequired[bool]
    guess_mime_type_enabled: NotRequired[bool]
    requester_pays: NotRequired[bool]
    tags: NotRequired[list[TagModelDict]]
    file_share_name: NotRequired[str]
    cache_attributes: NotRequired[CacheAttributesDict]
    notification_policy: NotRequired[str]
    vpc_endpoint_dns_name: NotRequired[str]
    bucket_region: NotRequired[str]
    audit_destination_arn: NotRequired[str]
