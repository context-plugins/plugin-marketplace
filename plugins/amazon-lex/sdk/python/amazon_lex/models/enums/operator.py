from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Operator(str, Enum):
    """The operator to use for the filter. Specify EQ when the ListAggregatedUtterances operation should return only
    utterances that equal the specified value. Specify CO when the ListAggregatedUtterances operation should return
    utterances that contain the specified value."""

    CO = "CO"
    EQ = "EQ"

    __str__ = str.__str__


OperatorOrStr: TypeAlias = Annotated[Operator | str, open_enum_validator(Operator)]
