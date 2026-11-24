from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Scope(str, Enum):
    COMPLETION_SCOPE_UNSPECIFIED = "COMPLETION_SCOPE_UNSPECIFIED"
    TENANT = "TENANT"
    PUBLIC = "PUBLIC"

    __str__ = str.__str__


ScopeOrStr: TypeAlias = Annotated[Scope | str, open_enum_validator(Scope)]
