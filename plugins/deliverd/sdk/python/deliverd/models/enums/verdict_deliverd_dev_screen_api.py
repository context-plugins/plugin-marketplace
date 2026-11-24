from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class VerdictDeliverdDevScreenApi(str, Enum):
    ALLOW = "allow"
    REDACT = "redact"
    ASK = "ask"
    DENY = "deny"

    __str__ = str.__str__


VerdictDeliverdDevScreenApiOrStr: TypeAlias = Annotated[
    VerdictDeliverdDevScreenApi | str, open_enum_validator(VerdictDeliverdDevScreenApi)
]
