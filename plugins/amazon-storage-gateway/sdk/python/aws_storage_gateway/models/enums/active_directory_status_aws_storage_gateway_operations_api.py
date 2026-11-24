from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ActiveDirectoryStatusAwsStorageGatewayOperationsApi(str, Enum):
    """Indicates the status of the gateway as a member of the Active Directory domain. This field is only used as part
    of a JoinDomain request. It is not affected by Active Directory connectivity changes that occur after the JoinDomain
    request succeeds. ACCESS_DENIED: Indicates that the JoinDomain operation failed due to an authentication error.
    DETACHED: Indicates that gateway is not joined to a domain. JOINED: Indicates that the gateway has successfully
    joined a domain. JOINING: Indicates that a JoinDomain operation is in progress. INSUFFICIENT_PERMISSIONS: Indicates
    that the JoinDomain operation f"""

    ACCESS_DENIED = "ACCESS_DENIED"
    DETACHED = "DETACHED"
    JOINED = "JOINED"
    JOINING = "JOINING"
    NETWORK_ERROR = "NETWORK_ERROR"
    TIMEOUT = "TIMEOUT"
    UNKNOWN_ERROR = "UNKNOWN_ERROR"
    INSUFFICIENT_PERMISSIONS = "INSUFFICIENT_PERMISSIONS"

    __str__ = str.__str__


ActiveDirectoryStatusAwsStorageGatewayOperationsApiOrStr: TypeAlias = Annotated[
    ActiveDirectoryStatusAwsStorageGatewayOperationsApi | str,
    open_enum_validator(ActiveDirectoryStatusAwsStorageGatewayOperationsApi),
]
