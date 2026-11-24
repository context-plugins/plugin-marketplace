from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Assessment(str, Enum):
    BUSINESS = "business"
    INDIVIDUAL_OR_UNVERIFIED = "individual_or_unverified"

    __str__ = str.__str__


AssessmentOrStr: TypeAlias = Annotated[Assessment | str, open_enum_validator(Assessment)]
