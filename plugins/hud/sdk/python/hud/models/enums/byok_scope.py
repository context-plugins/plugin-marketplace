from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ByokScope(str, Enum):
    MEMBER = "member"
    TEAM = "team"

    __str__ = str.__str__


ByokScopeOrStr: TypeAlias = Annotated[ByokScope | str, open_enum_validator(ByokScope)]
