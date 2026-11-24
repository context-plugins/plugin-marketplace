from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status1PerigonMonitorsApi(str, Enum):
    """Required initial monitor status. Accepts ACTIVE or DRAFT."""

    ACTIVE = "ACTIVE"
    DRAFT = "DRAFT"

    __str__ = str.__str__


Status1PerigonMonitorsApiOrStr: TypeAlias = Annotated[
    Status1PerigonMonitorsApi | str, open_enum_validator(Status1PerigonMonitorsApi)
]
