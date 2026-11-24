from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Role(str, Enum):
    """The UBO role in the account"""

    PARTNER = "PARTNER"
    PARTNER_FULL_ACCESS = "PARTNER_FULL_ACCESS"

    __str__ = str.__str__


RoleOrStr: TypeAlias = Annotated[Role | str, open_enum_validator(Role)]
