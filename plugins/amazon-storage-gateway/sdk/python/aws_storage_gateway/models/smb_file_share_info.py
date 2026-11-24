from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cache_attributes import CacheAttributes, CacheAttributesDict
from .enums.case_sensitivity import CaseSensitivityOrStr
from .enums.encryption_type import EncryptionTypeOrStr
from .enums.object_acl2 import ObjectAcl2OrStr
from .tag_model import TagModel, TagModelDict


class SmbFileShareInfo(SdkBaseModel):
    file_share_arn: Optional[str] = Field(default=UNSET, alias="FileShareARN")
    file_share_id: Optional[str] = Field(default=UNSET, alias="FileShareId")
    file_share_status: Optional[str] = Field(default=UNSET, alias="FileShareStatus")
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
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
    path: Optional[str] = Field(default=UNSET, alias="Path")
    """The file share path used by the SMB client to identify the mount point."""

    role: Optional[str] = Field(default=UNSET, alias="Role")
    location_arn: Optional[str] = Field(default=UNSET, alias="LocationARN")
    default_storage_class: Optional[str] = Field(default=UNSET, alias="DefaultStorageClass")
    """The default storage class for objects put into an Amazon S3 bucket by the S3 File Gateway. The default value is
    S3_STANDARD. Optional. Valid Values: S3_STANDARD | S3_INTELLIGENT_TIERING | S3_STANDARD_IA | S3_ONEZONE_IA"""

    object_acl: Optional[ObjectAcl2OrStr] = Field(default=UNSET, alias="ObjectACL")
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
    """If this value is set to true, it indicates that access control list (ACL) is enabled on the SMB file share. If it
    is set to false, it indicates that file and directory permissions are mapped to the POSIX permission. For more
    information, see Using Windows ACLs to limit SMB file share access in the Amazon S3 File Gateway User Guide."""

    access_based_enumeration: Optional[bool] = Field(default=UNSET, alias="AccessBasedEnumeration")
    """Indicates whether AccessBasedEnumeration is enabled."""

    admin_user_list: Optional[list[str]] = Field(default=UNSET, alias="AdminUserList")
    r"""A list of users or groups in the Active Directory that have administrator rights to the file share. A group must
    be prefixed with the @ character. Acceptable formats include: DOMAIN\User1, user1, @group1, and @DOMAIN\group1. Can
    only be set if Authentication is set to ActiveDirectory."""

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
    case_sensitivity: Optional[CaseSensitivityOrStr] = Field(default=UNSET, alias="CaseSensitivity")
    """The case of an object name in an Amazon S3 bucket. For ClientSpecified, the client determines the case
    sensitivity. For CaseSensitive, the gateway determines the case sensitivity. The default value is
    ClientSpecified."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """A list of up to 50 tags assigned to the SMB file share, sorted alphabetically by key name. Each tag is a
    key-value pair. For a gateway with more than 10 tags assigned, you can view all tags using the ListTagsForResource
    API operation."""

    file_share_name: Optional[str] = Field(default=UNSET, alias="FileShareName")
    """The name of the file share. Optional. FileShareName must be set if an S3 prefix name is set in LocationARN, or if
    an access point or access point alias is used."""

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


class SmbFileShareInfoDict(TypedDict):
    file_share_arn: NotRequired[str]
    file_share_id: NotRequired[str]
    file_share_status: NotRequired[str]
    gateway_arn: NotRequired[str]
    encryption_type: NotRequired[EncryptionTypeOrStr]
    kms_encrypted: NotRequired[bool]
    kms_key: NotRequired[str]
    path: NotRequired[str]
    role: NotRequired[str]
    location_arn: NotRequired[str]
    default_storage_class: NotRequired[str]
    object_acl: NotRequired[ObjectAcl2OrStr]
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
