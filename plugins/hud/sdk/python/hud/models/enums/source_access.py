from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SourceAccess(str, Enum):
    TEAM = "team"
    PUBLISHED = "published"

    __str__ = str.__str__


SourceAccessOrStr: TypeAlias = Annotated[SourceAccess | str, open_enum_validator(SourceAccess)]
