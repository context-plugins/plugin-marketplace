from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class IncludedData1AwsStepFunctionsStateMachinesApi(str, Enum):
    """If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt permission to decrypt
    the definition. Alternatively, you can call the API with includedData = METADATA_ONLY to get a successful response
    without the encrypted definition. When calling a labelled ARN for an encrypted state machine, the includedData =
    METADATA_ONLY parameter will not apply because Step Functions needs to decrypt the entire state machine definition
    to get the Distributed Map state’s definition. In this case, the API caller needs to have kms:Decrypt permission."""

    ALL_DATA = "ALL_DATA"
    METADATA_ONLY = "METADATA_ONLY"

    __str__ = str.__str__


IncludedData1AwsStepFunctionsStateMachinesApiOrStr: TypeAlias = Annotated[
    IncludedData1AwsStepFunctionsStateMachinesApi | str,
    open_enum_validator(IncludedData1AwsStepFunctionsStateMachinesApi),
]
