from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BillRecordStatus(str, Enum):
    """Record status enum for bills."""

    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"
    DRAFT = "DRAFT"
    DRAFT_DELETED = "DRAFT_DELETED"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


BillRecordStatusOrStr: TypeAlias = Annotated[BillRecordStatus | str, open_enum_validator(BillRecordStatus)]
