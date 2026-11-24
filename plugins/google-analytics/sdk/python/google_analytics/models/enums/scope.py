from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Scope(str, Enum):
    """Required. Immutable. The scope of this custom metric."""

    METRIC_SCOPE_UNSPECIFIED = "METRIC_SCOPE_UNSPECIFIED"
    EVENT = "EVENT"

    __str__ = str.__str__


ScopeOrStr: TypeAlias = Annotated[Scope | str, open_enum_validator(Scope)]
