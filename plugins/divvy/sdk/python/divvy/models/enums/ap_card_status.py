from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApCardStatus(str, Enum):
    """AP Card response status."""

    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    DELETED = "DELETED"
    PENDING = "PENDING"
    DRAFT = "DRAFT"
    DRAFT_DELETED = "DRAFT_DELETED"
    FROZEN = "FROZEN"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


ApCardStatusOrStr: TypeAlias = Annotated[ApCardStatus | str, open_enum_validator(ApCardStatus)]
