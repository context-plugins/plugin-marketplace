from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateCloudFormationCollectionFilter(SdkBaseModel):
    stack_names: Optional[list[str]] = Field(default=UNSET, alias="StackNames")
    """An array of the names of the Amazon Web Services CloudFormation stacks to update. You can specify up to 500
    Amazon Web Services CloudFormation stacks."""


class UpdateCloudFormationCollectionFilterDict(TypedDict):
    stack_names: NotRequired[list[str]]
