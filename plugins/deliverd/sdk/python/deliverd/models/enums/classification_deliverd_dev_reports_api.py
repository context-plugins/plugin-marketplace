from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ClassificationDeliverdDevReportsApi(str, Enum):
    PUBLIC = "public"
    INTERNAL = "internal"
    CONFIDENTIAL = "confidential"
    RESTRICTED = "restricted"

    __str__ = str.__str__


ClassificationDeliverdDevReportsApiOrStr: TypeAlias = Annotated[
    ClassificationDeliverdDevReportsApi | str, open_enum_validator(ClassificationDeliverdDevReportsApi)
]
