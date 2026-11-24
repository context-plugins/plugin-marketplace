from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.included_data_aws_step_functions_state_machines_api import IncludedDataAwsStepFunctionsStateMachinesApiOrStr


class DescribeStateMachineForExecutionInputAwsStepFunctionsStateMachinesApi(SdkBaseModel):
    execution_arn: str = Field(alias="executionArn")
    """The Amazon Resource Name (ARN) of the execution you want state machine information for."""

    included_data: Optional[IncludedDataAwsStepFunctionsStateMachinesApiOrStr] = Field(
        default=UNSET, alias="includedData"
    )
    """If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt permission to decrypt
    the definition. Alternatively, you can call the API with includedData = METADATA_ONLY to get a successful response
    without the encrypted definition."""


class DescribeStateMachineForExecutionInputAwsStepFunctionsStateMachinesApiDict(TypedDict):
    execution_arn: str
    included_data: NotRequired[IncludedDataAwsStepFunctionsStateMachinesApiOrStr]
