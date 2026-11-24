from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IssueType(str, Enum):
    """Issue type of the IPO. ``regular`` is a mainboard issue"""

    REGULAR = "regular"
    SME = "sme"

    __str__ = str.__str__


IssueTypeOrStr: TypeAlias = Annotated[IssueType | str, open_enum_validator(IssueType)]
