from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubjectType(str, Enum):
    BUSINESS = "business"
    INDIVIDUAL_OR_UNVERIFIED = "individual_or_unverified"
    WEBSITE = "website"

    __str__ = str.__str__


SubjectTypeOrStr: TypeAlias = Annotated[SubjectType | str, open_enum_validator(SubjectType)]
