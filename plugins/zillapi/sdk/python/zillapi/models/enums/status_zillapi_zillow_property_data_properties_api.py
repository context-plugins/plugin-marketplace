from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusZillapiZillowPropertyDataPropertiesApi(str, Enum):
    FOR_SALE = "FOR_SALE"
    RECENTLY_SOLD = "RECENTLY_SOLD"
    FOR_RENT = "FOR_RENT"

    __str__ = str.__str__


StatusZillapiZillowPropertyDataPropertiesApiOrStr: TypeAlias = Annotated[
    StatusZillapiZillowPropertyDataPropertiesApi | str,
    open_enum_validator(StatusZillapiZillowPropertyDataPropertiesApi),
]
