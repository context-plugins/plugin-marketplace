from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CloudFormationCostEstimationResourceCollectionFilter(SdkBaseModel):
    stack_names: Optional[list[str]] = Field(default=UNSET, alias="StackNames")
    """An array of CloudFormation stack names. Its size is fixed at 1 item."""


class CloudFormationCostEstimationResourceCollectionFilterDict(TypedDict):
    stack_names: NotRequired[list[str]]
