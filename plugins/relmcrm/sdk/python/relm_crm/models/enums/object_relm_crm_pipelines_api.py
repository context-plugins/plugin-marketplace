from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ObjectRelmCrmPipelinesApi(str, Enum):
    PIPELINE = "pipeline"

    __str__ = str.__str__


ObjectRelmCrmPipelinesApiOrStr: TypeAlias = Annotated[
    ObjectRelmCrmPipelinesApi | str, open_enum_validator(ObjectRelmCrmPipelinesApi)
]
