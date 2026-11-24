from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IncludeLinks(str, Enum):
    TRUE = "true"
    FALSE = "false"

    __str__ = str.__str__


IncludeLinksOrStr: TypeAlias = Annotated[IncludeLinks | str, open_enum_validator(IncludeLinks)]
