from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.included_data import IncludedDataOrStr


class DescribeExecutionInput(SdkBaseModel):
    execution_arn: str = Field(alias="executionArn")
    """The Amazon Resource Name (ARN) of the execution to describe."""

    included_data: Optional[IncludedDataOrStr] = Field(default=UNSET, alias="includedData")
    """If your state machine definition is encrypted with a KMS key, callers must have kms:Decrypt permission to decrypt
    the definition. Alternatively, you can call DescribeStateMachine API with includedData = METADATA_ONLY to get a
    successful response without the encrypted definition."""


class DescribeExecutionInputDict(TypedDict):
    execution_arn: str
    included_data: NotRequired[IncludedDataOrStr]
