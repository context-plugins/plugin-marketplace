from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StateAmazonVpcNatGatewaysApi(str, Enum):
    """The state of the NAT gateway"""

    PENDING = "pending"
    FAILED = "failed"
    AVAILABLE = "available"
    DELETING = "deleting"
    DELETED = "deleted"

    __str__ = str.__str__


StateAmazonVpcNatGatewaysApiOrStr: TypeAlias = Annotated[
    StateAmazonVpcNatGatewaysApi | str, open_enum_validator(StateAmazonVpcNatGatewaysApi)
]
