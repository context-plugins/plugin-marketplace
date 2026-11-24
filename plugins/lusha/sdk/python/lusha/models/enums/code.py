from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Code(str, Enum):
    NOT_FOUND = "NOT_FOUND"
    COMPLIANCE_RESTRICTED = "COMPLIANCE_RESTRICTED"
    ENRICH_FAILED = "ENRICH_FAILED"
    NO_SCORE = "NO_SCORE"

    __str__ = str.__str__


CodeOrStr: TypeAlias = Annotated[Code | str, open_enum_validator(Code)]
