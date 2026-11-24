from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """The type of the reactive anomaly. It can be one of the following types. CAUSAL - the anomaly can cause a new
    insight. CONTEXTUAL - the anomaly contains additional information about an insight or its causal anomaly."""

    CAUSAL = "CAUSAL"
    CONTEXTUAL = "CONTEXTUAL"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
