from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ScopeType(str, Enum):
    """Network name. You can search in one or both networks.
    * Select ``BILL`` for BILL Network
    * Select ``RPPS`` for verified national vendor network
    * Select ``ALL`` for both networks"""

    BILL = "BILL"
    RPPS = "RPPS"
    ALL = "ALL"

    __str__ = str.__str__


ScopeTypeOrStr: TypeAlias = Annotated[ScopeType | str, open_enum_validator(ScopeType)]
