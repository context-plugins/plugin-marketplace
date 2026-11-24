from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IssueType3(str, Enum):
    REGULAR = "regular"
    SME = "sme"

    __str__ = str.__str__


IssueType3OrStr: TypeAlias = Annotated[IssueType3 | str, open_enum_validator(IssueType3)]
