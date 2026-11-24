from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PrivateIpv6GoogleAccess(str, Enum):
    """Optional. The type of IPv6 access for a cluster."""

    PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"
    INHERIT_FROM_SUBNETWORK = "INHERIT_FROM_SUBNETWORK"
    OUTBOUND = "OUTBOUND"
    BIDIRECTIONAL = "BIDIRECTIONAL"

    __str__ = str.__str__


PrivateIpv6GoogleAccessOrStr: TypeAlias = Annotated[
    PrivateIpv6GoogleAccess | str, open_enum_validator(PrivateIpv6GoogleAccess)
]
