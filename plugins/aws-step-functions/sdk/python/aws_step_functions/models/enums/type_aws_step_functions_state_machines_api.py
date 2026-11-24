from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeAwsStepFunctionsStateMachinesApi(str, Enum):
    """Determines whether a Standard or Express state machine is created. The default is STANDARD. You cannot update the
    type of a state machine once it has been created."""

    STANDARD = "STANDARD"
    EXPRESS = "EXPRESS"

    __str__ = str.__str__


TypeAwsStepFunctionsStateMachinesApiOrStr: TypeAlias = Annotated[
    TypeAwsStepFunctionsStateMachinesApi | str, open_enum_validator(TypeAwsStepFunctionsStateMachinesApi)
]
