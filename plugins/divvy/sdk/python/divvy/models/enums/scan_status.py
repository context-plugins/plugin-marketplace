from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ScanStatus(str, Enum):
    """Document Scan status."""

    NOT_SCANNED = "NOT_SCANNED"
    CLEAN = "CLEAN"
    INFECTED = "INFECTED"
    IN_QUEUE = "IN_QUEUE"
    REJECTED = "REJECTED"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


ScanStatusOrStr: TypeAlias = Annotated[ScanStatus | str, open_enum_validator(ScanStatus)]
