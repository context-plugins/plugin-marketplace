from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cache_attributes import CacheAttributes, CacheAttributesDict
from .enums.case_sensitivity import CaseSensitivityOrStr
from .enums.encryption_type import EncryptionTypeOrStr
from .enums.object_acl import ObjectAclOrStr
from .tag_model import TagModel, TagModelDict


class CreateSmbFileShareInput(SdkBaseModel):
    client_token: str = Field(alias="ClientToken")
    """A unique string value that you supply that is used by S3 File Gateway to ensure idempotent file share
    creation."""

    gateway_arn: str = Field(alias="GatewayARN")
    """The ARN of the S3 File Gateway on which you want to create a file share."""

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

    smbacl_enabled: Optional[bool] = Field(default=UNSET, alias="SMBACLEnabled")
    """Set this value to true to enable access control list (ACL) on the SMB file share. Set it to false to map file and
    directory permissions to the POSIX permissions. For more information, see Using Windows ACLs to limit SMB file share
    access in the Amazon S3 File Gateway User Guide. Valid Values: true | false"""

    access_based_enumeration: Optional[bool] = Field(default=UNSET, alias="AccessBasedEnumeration")
    """The files and folders on this share will only be visible to users with read access."""

    admin_user_list: Optional[list[str]] = Field(default=UNSET, alias="AdminUserList")
    r"""A list of users or groups in the Active Directory that will be granted administrator privileges on the file
    share. These users can do all file operations as the super-user. Acceptable formats include: DOMAIN\User1, user1,
    @group1, and @DOMAIN\group1. Use this option very carefully, because any user in this list can do anything they like
    on the file share, regardless of file permissions."""

    valid_user_list: Optional[list[str]] = Field(default=UNSET, alias="ValidUserList")
    r"""A list of users or groups in the Active Directory that are allowed to access the file share. A group must be
    prefixed with the @ character. Acceptable formats include: DOMAIN\User1, user1, @group1, and @DOMAIN\group1. Can
    only be set if Authentication is set to ActiveDirectory."""

    invalid_user_list: Optional[list[str]] = Field(default=UNSET, alias="InvalidUserList")
    r"""A list of users or groups in the Active Directory that are not allowed to access the file share. A group must be
    prefixed with the @ character. Acceptable formats include: DOMAIN\User1, user1, @group1, and @DOMAIN\group1. Can
    only be set if Authentication is set to ActiveDirectory."""

    audit_destination_arn: Optional[str] = Field(default=UNSET, alias="AuditDestinationARN")
    """The Amazon Resource Name (ARN) of the storage used for audit logs."""

    authentication: Optional[str] = Field(default=UNSET, alias="Authentication")
    """The authentication method that users use to access the file share. The default is ActiveDirectory. Valid Values:
    ActiveDirectory | GuestAccess"""

    case_sensitivity: Optional[CaseSensitivityOrStr] = Field(default=UNSET, alias="CaseSensitivity")
    """The case of an object name in an Amazon S3 bucket. For ClientSpecified, the client determines the case
    sensitivity. For CaseSensitive, the gateway determines the case sensitivity. The default value is
    ClientSpecified."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """A list of up to 50 tags that can be assigned to the NFS file share. Each tag is a key-value pair. Valid
    characters for key and value are letters, spaces, and numbers representable in UTF-8 format, and the following
    special characters: + - = . _ : / @. The maximum length of a tag's key is 128 characters, and the maximum length for
    a tag's value is 256."""

    file_share_name: Optional[str] = Field(default=UNSET, alias="FileShareName")
    r"""The name of the file share. Optional. FileShareName must be set if an S3 prefix name is set in LocationARN, or
    if an access point or access point alias is used. A valid SMB file share name cannot contain the following
    characters: [,],#,;,,>,:,",\,/,|,?,*,+, or ASCII control characters 1-31."""

    cache_attributes: Optional[CacheAttributes] = Field(default=UNSET, alias="CacheAttributes")
    notification_policy: Optional[str] = Field(default=UNSET, alias="NotificationPolicy")
    """The notification policy of the file share. SettlingTimeInSeconds controls the number of seconds to wait after the
    last point in time a client wrote to a file before generating an ObjectUploaded notification. Because clients can
    make many small writes to files, it's best to set this parameter for as long as possible to avoid generating
    multiple notifications for the same file in a small time period. SettlingTimeInSeconds has no effect on the timing
    of the object uploading to Amazon S3, only the timing of the notification. This setting is not meant to specify an
    exact time at which the notificat"""

    vpc_endpoint_dns_name: Optional[str] = Field(default=UNSET, alias="VPCEndpointDNSName")
    """Specifies the DNS name for the VPC endpoint that the SMB file share uses to connect to Amazon S3. This parameter
    is required for SMB file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access
    point alias that points to a VPC access point."""

    bucket_region: Optional[str] = Field(default=UNSET, alias="BucketRegion")
    """Specifies the Region of the S3 bucket where the SMB file share stores files. This parameter is required for SMB
    file shares that connect to Amazon S3 through a VPC endpoint, a VPC access point, or an access point alias that
    points to a VPC access point."""

    oplocks_enabled: Optional[bool] = Field(default=UNSET, alias="OplocksEnabled")
    """Specifies whether opportunistic locking is enabled for the SMB file share. Enabling opportunistic locking on
    case-sensitive shares is not recommended for workloads that involve access to files with the same name in different
    case. Valid Values: true | false"""


class CreateSmbFileShareInputDict(TypedDict):
    client_token: str
    gateway_arn: str
    encryption_type: NotRequired[EncryptionTypeOrStr]
    kms_encrypted: NotRequired[bool]
    kms_key: NotRequired[str]
    role: str
    location_arn: str
    default_storage_class: NotRequired[str]
    object_acl: NotRequired[ObjectAclOrStr]
    read_only: NotRequired[bool]
    guess_mime_type_enabled: NotRequired[bool]
    requester_pays: NotRequired[bool]
    smbacl_enabled: NotRequired[bool]
    access_based_enumeration: NotRequired[bool]
    admin_user_list: NotRequired[list[str]]
    valid_user_list: NotRequired[list[str]]
    invalid_user_list: NotRequired[list[str]]
    audit_destination_arn: NotRequired[str]
    authentication: NotRequired[str]
    case_sensitivity: NotRequired[CaseSensitivityOrStr]
    tags: NotRequired[list[TagModelDict]]
    file_share_name: NotRequired[str]
    cache_attributes: NotRequired[CacheAttributesDict]
    notification_policy: NotRequired[str]
    vpc_endpoint_dns_name: NotRequired[str]
    bucket_region: NotRequired[str]
    oplocks_enabled: NotRequired[bool]
