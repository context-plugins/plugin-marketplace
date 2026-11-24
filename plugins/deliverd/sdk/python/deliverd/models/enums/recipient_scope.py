from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RecipientScope(str, Enum):
    INTERNAL = "internal"
    EXTERNAL = "external"

    __str__ = str.__str__


RecipientScopeOrStr: TypeAlias = Annotated[RecipientScope | str, open_enum_validator(RecipientScope)]
