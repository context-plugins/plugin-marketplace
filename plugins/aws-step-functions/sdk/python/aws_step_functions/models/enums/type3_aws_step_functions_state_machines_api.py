from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type3AwsStepFunctionsStateMachinesApi(str, Enum):
    STANDARD = "STANDARD"
    EXPRESS = "EXPRESS"

    __str__ = str.__str__


Type3AwsStepFunctionsStateMachinesApiOrStr: TypeAlias = Annotated[
    Type3AwsStepFunctionsStateMachinesApi | str, open_enum_validator(Type3AwsStepFunctionsStateMachinesApi)
]
