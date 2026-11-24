from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LabelSaplingDetectionApi(int, Enum):
    VALUE_0 = 0
    VALUE_1 = 1

    __str__ = str.__str__


LabelSaplingDetectionApiOrInt: TypeAlias = Annotated[
    LabelSaplingDetectionApi | int, open_enum_validator(LabelSaplingDetectionApi)
]
