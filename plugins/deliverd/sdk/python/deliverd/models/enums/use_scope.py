from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class UseScope(str, Enum):
    """Who uses it: one person for their work, a team or function, or the whole organisation"""

    PERSONAL = "personal"
    FUNCTIONAL = "functional"
    ORGANISATION = "organisation"

    __str__ = str.__str__


UseScopeOrStr: TypeAlias = Annotated[UseScope | str, open_enum_validator(UseScope)]
