from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.active_directory_status_aws_storage_gateway_operations_api import (
    ActiveDirectoryStatusAwsStorageGatewayOperationsApiOrStr,
)


class JoinDomainOutputAwsStorageGatewayOperationsApi(SdkBaseModel):
    gateway_arn: Optional[str] = Field(default=UNSET, alias="GatewayARN")
    """The unique Amazon Resource Name (ARN) of the gateway that joined the domain."""

    active_directory_status: Optional[ActiveDirectoryStatusAwsStorageGatewayOperationsApiOrStr] = Field(
        default=UNSET, alias="ActiveDirectoryStatus"
    )
    """Indicates the status of the gateway as a member of the Active Directory domain. This field is only used as part
    of a JoinDomain request. It is not affected by Active Directory connectivity changes that occur after the JoinDomain
    request succeeds. ACCESS_DENIED: Indicates that the JoinDomain operation failed due to an authentication error.
    DETACHED: Indicates that gateway is not joined to a domain. JOINED: Indicates that the gateway has successfully
    joined a domain. JOINING: Indicates that a JoinDomain operation is in progress. INSUFFICIENT_PERMISSIONS: Indicates
    that the JoinDomain operation f"""


class JoinDomainOutputAwsStorageGatewayOperationsApiDict(TypedDict):
    gateway_arn: NotRequired[str]
    active_directory_status: NotRequired[ActiveDirectoryStatusAwsStorageGatewayOperationsApiOrStr]
