from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ScopeStatableStatsSitesApi(str, Enum):
    VISITOR = "visitor"
    SESSION = "session"

    __str__ = str.__str__


ScopeStatableStatsSitesApiOrStr: TypeAlias = Annotated[
    ScopeStatableStatsSitesApi | str, open_enum_validator(ScopeStatableStatsSitesApi)
]
