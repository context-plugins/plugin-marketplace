from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReadingLevel(str, Enum):
    """Target audience: "plain" (plain-language style for a general audience, the default), "elementary" (~US grade
    3-5), "middle_school" (~grade 6-8) or "high_school" (~grade 9-10)."""

    PLAIN = "plain"
    ELEMENTARY = "elementary"
    MIDDLE_SCHOOL = "middle_school"
    HIGH_SCHOOL = "high_school"

    __str__ = str.__str__


ReadingLevelOrStr: TypeAlias = Annotated[ReadingLevel | str, open_enum_validator(ReadingLevel)]
