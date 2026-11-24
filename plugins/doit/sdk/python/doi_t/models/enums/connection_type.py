from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConnectionType(str, Enum):
    """Link connection type."""

    NORMAL = "normal"
    TUNNEL = "tunnel"
    PRIVATE = "private"
    VPN = "VPN"
    VPC_PEERING = "VPC Peering"
    NETWORK_CONNECTIVITY_CENTER = "Network Connectivity Center"
    PRIVATE_SERVICE_CONNECT = "Private Service Connect"
    PRIVATE_GOOGLE_ACCESS = "Private Google Access"
    SERVERLESS_VPC = "Serverless VPC"
    SERVERLESS_VPC_ACCESS_CONNECTOR = "Serverless VPC Access Connector"
    CROSS_CLOUD_INTERCONNECT = "Cross Cloud Interconnect"
    PARTNER_INTERCONNECT = "Partner Interconnect"
    DEDICATED_INTERCONNECT = "Dedicated Interconnect"

    __str__ = str.__str__


ConnectionTypeOrStr: TypeAlias = Annotated[ConnectionType | str, open_enum_validator(ConnectionType)]
