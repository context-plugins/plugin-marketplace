from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FilterBy(str, Enum):
    PHONE_NUMBERS = "phoneNumbers"
    EMAIL_ADDRESSES = "emailAddresses"

    __str__ = str.__str__


FilterByOrStr: TypeAlias = Annotated[FilterBy | str, open_enum_validator(FilterBy)]
