from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StateAmazonVpcVpCsApi(str, Enum):
    """The current state of the VPC"""

    PENDING = "pending"
    AVAILABLE = "available"

    __str__ = str.__str__


StateAmazonVpcVpCsApiOrStr: TypeAlias = Annotated[
    StateAmazonVpcVpCsApi | str, open_enum_validator(StateAmazonVpcVpCsApi)
]
