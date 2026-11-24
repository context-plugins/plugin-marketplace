from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StateAmazonVpcSubnetsApi(str, Enum):
    """The current state of the subnet"""

    PENDING = "pending"
    AVAILABLE = "available"

    __str__ = str.__str__


StateAmazonVpcSubnetsApiOrStr: TypeAlias = Annotated[
    StateAmazonVpcSubnetsApi | str, open_enum_validator(StateAmazonVpcSubnetsApi)
]
