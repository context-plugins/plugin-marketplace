from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusZillapiZillowPropertyDataListingsApi(str, Enum):
    """Listing status."""

    FOR_SALE = "for_sale"
    FOR_RENT = "for_rent"
    SOLD = "sold"

    __str__ = str.__str__


StatusZillapiZillowPropertyDataListingsApiOrStr: TypeAlias = Annotated[
    StatusZillapiZillowPropertyDataListingsApi | str, open_enum_validator(StatusZillapiZillowPropertyDataListingsApi)
]
