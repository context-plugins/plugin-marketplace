from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VcsType(str, Enum):
    GITHUB = "github"
    BITBUCKET = "bitbucket"

    __str__ = str.__str__


VcsTypeOrStr: TypeAlias = Annotated[VcsType | str, open_enum_validator(VcsType)]
