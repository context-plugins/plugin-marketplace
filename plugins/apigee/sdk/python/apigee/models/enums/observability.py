from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Observability(str, Enum):
    """Optional. Indicates if the user archived this incident."""

    OBSERVABILITY_UNSPECIFIED = "OBSERVABILITY_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    ARCHIVED = "ARCHIVED"

    __str__ = str.__str__


ObservabilityOrStr: TypeAlias = Annotated[Observability | str, open_enum_validator(Observability)]
