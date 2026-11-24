from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SignalType(str, Enum):
    ALL_SIGNALS = "allSignals"
    PROMOTION = "promotion"
    COMPANY_CHANGE = "companyChange"

    __str__ = str.__str__


SignalTypeOrStr: TypeAlias = Annotated[SignalType | str, open_enum_validator(SignalType)]
