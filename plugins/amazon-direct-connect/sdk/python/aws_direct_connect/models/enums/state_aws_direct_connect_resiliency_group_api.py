from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StateAwsDirectConnectResiliencyGroupApi(str, Enum):
    """The state of the resiliency group. The valid values are pending, available, deleting, and deleted."""

    PENDING = "pending"
    AVAILABLE = "available"
    DELETING = "deleting"
    DELETED = "deleted"

    __str__ = str.__str__


StateAwsDirectConnectResiliencyGroupApiOrStr: TypeAlias = Annotated[
    StateAwsDirectConnectResiliencyGroupApi | str, open_enum_validator(StateAwsDirectConnectResiliencyGroupApi)
]
