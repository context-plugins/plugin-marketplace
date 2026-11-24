from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status3(str, Enum):
    """Specifies the status of the endpoint. Because the endpoint updates and creation are asynchronous, so customers
    will need to wait for the endpoint to be Ready status before making inference requests."""

    CREATING = "CREATING"
    DELETING = "DELETING"
    FAILED = "FAILED"
    IN_SERVICE = "IN_SERVICE"
    UPDATING = "UPDATING"

    __str__ = str.__str__


Status3OrStr: TypeAlias = Annotated[Status3 | str, open_enum_validator(Status3)]
