from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PolicyJidScreenApi(str, Enum):
    STRICT = "strict"
    BALANCED = "balanced"
    PERMISSIVE = "permissive"

    __str__ = str.__str__


PolicyJidScreenApiOrStr: TypeAlias = Annotated[PolicyJidScreenApi | str, open_enum_validator(PolicyJidScreenApi)]
