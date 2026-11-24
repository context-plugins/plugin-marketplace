from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreditPreference(str, Enum):
    AUTO = "auto"
    CREDITS = "credits"

    __str__ = str.__str__


CreditPreferenceOrStr: TypeAlias = Annotated[CreditPreference | str, open_enum_validator(CreditPreference)]
