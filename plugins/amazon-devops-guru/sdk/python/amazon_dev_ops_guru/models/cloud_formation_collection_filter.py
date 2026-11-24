from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CloudFormationCollectionFilter(SdkBaseModel):
    stack_names: Optional[list[str]] = Field(default=UNSET, alias="StackNames")
    """An array of CloudFormation stack names."""


class CloudFormationCollectionFilterDict(TypedDict):
    stack_names: NotRequired[list[str]]
