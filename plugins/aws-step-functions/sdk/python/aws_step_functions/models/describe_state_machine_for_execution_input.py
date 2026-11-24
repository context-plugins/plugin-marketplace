from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.included_data1 import IncludedData1OrStr


class DescribeStateMachineForExecutionInput(SdkBaseModel):
    execution_arn: str = Field(alias="executionArn")
    """The Amazon Resource Name (ARN) of the execution you want state machine information for."""

    included_data: Optional[IncludedData1OrStr] = Field(default=UNSET, alias="includedData")
    """If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt permission to decrypt
    the definition. Alternatively, you can call the API with includedData = METADATA_ONLY to get a successful response
    without the encrypted definition."""


class DescribeStateMachineForExecutionInputDict(TypedDict):
    execution_arn: str
    included_data: NotRequired[IncludedData1OrStr]
