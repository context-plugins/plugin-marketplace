from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Retention(str, Enum):
    DELETION_RETENTION_UNSPECIFIED = "DELETION_RETENTION_UNSPECIFIED"
    MINIMUM = "MINIMUM"
    NO_RETENTION = "NO_RETENTION"

    __str__ = str.__str__


RetentionOrStr: TypeAlias = Annotated[Retention | str, open_enum_validator(Retention)]
