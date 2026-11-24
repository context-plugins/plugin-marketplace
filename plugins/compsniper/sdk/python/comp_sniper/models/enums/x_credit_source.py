from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class XCreditSource(str, Enum):
    CREDITS = "credits"

    __str__ = str.__str__


XCreditSourceOrStr: TypeAlias = Annotated[XCreditSource | str, open_enum_validator(XCreditSource)]
