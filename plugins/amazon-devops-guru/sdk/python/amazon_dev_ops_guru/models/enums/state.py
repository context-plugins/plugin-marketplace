from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class State(str, Enum):
    """The state of the resource. The resource is ACTIVE if it produces metrics, events, or logs within an hour,
    otherwise it is INACTIVE. You pay for the number of active Amazon Web Services resource hours analyzed for each
    resource. Inactive resources are not charged."""

    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"

    __str__ = str.__str__


StateOrStr: TypeAlias = Annotated[State | str, open_enum_validator(State)]
