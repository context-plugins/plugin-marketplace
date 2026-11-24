from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StateAmazonVpcRouteTablesApi(str, Enum):
    """The state of the route"""

    ACTIVE = "active"
    BLACKHOLE = "blackhole"

    __str__ = str.__str__


StateAmazonVpcRouteTablesApiOrStr: TypeAlias = Annotated[
    StateAmazonVpcRouteTablesApi | str, open_enum_validator(StateAmazonVpcRouteTablesApi)
]
