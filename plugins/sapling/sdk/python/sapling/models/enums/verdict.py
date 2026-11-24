from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Verdict(str, Enum):
    """Plain-language summary: mixed when part of the text scores as AI (ai_fraction >= 0.2) or the overall score is >=
    0.5 with less than 80% of the text scoring as AI. Absent if the text could not be scored."""

    HUMAN = "human"
    MIXED = "mixed"
    AI = "ai"

    __str__ = str.__str__


VerdictOrStr: TypeAlias = Annotated[Verdict | str, open_enum_validator(Verdict)]
