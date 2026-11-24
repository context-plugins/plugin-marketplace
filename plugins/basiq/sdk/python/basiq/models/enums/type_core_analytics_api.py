from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeCoreAnalyticsApi(str, Enum):
    ERROR = "error"

    __str__ = str.__str__


TypeCoreAnalyticsApiOrStr: TypeAlias = Annotated[TypeCoreAnalyticsApi | str, open_enum_validator(TypeCoreAnalyticsApi)]
