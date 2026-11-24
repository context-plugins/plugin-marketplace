from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class JobStateMatcher(str, Enum):
    ALL = "ALL"
    ACTIVE = "ACTIVE"
    NON_ACTIVE = "NON_ACTIVE"

    __str__ = str.__str__


JobStateMatcherOrStr: TypeAlias = Annotated[JobStateMatcher | str, open_enum_validator(JobStateMatcher)]
