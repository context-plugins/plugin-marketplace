from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Scm(str, Enum):
    GIT = "git"

    __str__ = str.__str__


ScmOrStr: TypeAlias = Annotated[Scm | str, open_enum_validator(Scm)]
