from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type1AwsStepFunctionsStateMachinesApi(str, Enum):
    """Encryption type"""

    AWS_OWNED_KEY = "AWS_OWNED_KEY"
    CUSTOMER_MANAGED_KMS_KEY = "CUSTOMER_MANAGED_KMS_KEY"

    __str__ = str.__str__


Type1AwsStepFunctionsStateMachinesApiOrStr: TypeAlias = Annotated[
    Type1AwsStepFunctionsStateMachinesApi | str, open_enum_validator(Type1AwsStepFunctionsStateMachinesApi)
]
