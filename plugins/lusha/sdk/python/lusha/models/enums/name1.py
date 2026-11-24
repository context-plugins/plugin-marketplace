from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Name1(str, Enum):
    ANGEL = "angel"
    VENTURE = "venture"
    PRIVATE_EQUITY = "private_equity"
    CROWDFUNDING = "crowdfunding"
    GRANT = "grant"
    DEBT_FINANCING = "debt_financing"
    OTHER = "other"

    __str__ = str.__str__


Name1OrStr: TypeAlias = Annotated[Name1 | str, open_enum_validator(Name1)]
