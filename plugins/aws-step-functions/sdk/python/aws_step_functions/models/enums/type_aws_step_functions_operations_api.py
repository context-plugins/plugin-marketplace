from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeAwsStepFunctionsOperationsApi(str, Enum):
    """The target type of state machine for this definition. The default is STANDARD."""

    STANDARD = "STANDARD"
    EXPRESS = "EXPRESS"

    __str__ = str.__str__


TypeAwsStepFunctionsOperationsApiOrStr: TypeAlias = Annotated[
    TypeAwsStepFunctionsOperationsApi | str, open_enum_validator(TypeAwsStepFunctionsOperationsApi)
]
