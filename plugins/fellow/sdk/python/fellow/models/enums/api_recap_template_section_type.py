from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApiRecapTemplateSectionType(str, Enum):
    STANDARD = "STANDARD"
    CUSTOM = "CUSTOM"

    __str__ = str.__str__


ApiRecapTemplateSectionTypeOrStr: TypeAlias = Annotated[
    ApiRecapTemplateSectionType | str, open_enum_validator(ApiRecapTemplateSectionType)
]
