from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IncludedDataAwsStepFunctionsStateMachinesApi(str, Enum):
    """If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt permission to decrypt
    the definition. Alternatively, you can call the API with includedData = METADATA_ONLY to get a successful response
    without the encrypted definition."""

    ALL_DATA = "ALL_DATA"
    METADATA_ONLY = "METADATA_ONLY"

    __str__ = str.__str__


IncludedDataAwsStepFunctionsStateMachinesApiOrStr: TypeAlias = Annotated[
    IncludedDataAwsStepFunctionsStateMachinesApi | str,
    open_enum_validator(IncludedDataAwsStepFunctionsStateMachinesApi),
]
