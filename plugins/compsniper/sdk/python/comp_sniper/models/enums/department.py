from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Department(str, Enum):
    """Department filter"""

    ANY = "any"
    MENSWEAR = "menswear"
    WOMENSWEAR = "womenswear"

    __str__ = str.__str__


DepartmentOrStr: TypeAlias = Annotated[Department | str, open_enum_validator(Department)]
