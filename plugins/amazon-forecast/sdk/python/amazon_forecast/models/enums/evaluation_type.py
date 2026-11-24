from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EvaluationType(str, Enum):
    """The type of evaluation. SUMMARY - The average metrics across all windows. COMPUTED - The metrics for the
    specified window."""

    SUMMARY = "SUMMARY"
    COMPUTED = "COMPUTED"

    __str__ = str.__str__


EvaluationTypeOrStr: TypeAlias = Annotated[EvaluationType | str, open_enum_validator(EvaluationType)]
