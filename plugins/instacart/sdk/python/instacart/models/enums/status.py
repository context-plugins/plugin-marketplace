from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Status(str, Enum):
    """The current status of the order."""

    BRAND_NEW = "brand_new"
    ACKNOWLEDGED = "acknowledged"
    PICKING = "picking"
    STAGING = "staging"
    DELIVERING = "delivering"
    DELIVERED = "delivered"
    CANCELED = "canceled"
    RESCHEDULED = "rescheduled"

    __str__ = str.__str__


StatusOrStr: TypeAlias = Annotated[Status | str, open_enum_validator(Status)]
