from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeSaplingDetectionApi(str, Enum):
    PERSON = "person"
    ORGANIZATION = "organization"
    LOCATION = "location"
    DATE = "date"
    TIME = "time"
    MONEY = "money"
    PERCENT = "percent"
    QUANTITY = "quantity"
    PRODUCT = "product"
    EVENT = "event"

    __str__ = str.__str__


TypeSaplingDetectionApiOrStr: TypeAlias = Annotated[
    TypeSaplingDetectionApi | str, open_enum_validator(TypeSaplingDetectionApi)
]
