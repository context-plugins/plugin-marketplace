from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CustomViewDetailStatus(str, Enum):
    DRAFT = "DRAFT"
    PUBLISHED = "PUBLISHED"

    __str__ = str.__str__


CustomViewDetailStatusOrStr: TypeAlias = Annotated[
    CustomViewDetailStatus | str, open_enum_validator(CustomViewDetailStatus)
]
