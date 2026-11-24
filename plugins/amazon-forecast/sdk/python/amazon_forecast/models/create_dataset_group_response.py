from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateDatasetGroupResponse(SdkBaseModel):
    dataset_group_arn: Optional[str] = Field(default=UNSET, alias="DatasetGroupArn")
    """The Amazon Resource Name (ARN) of the dataset group."""


class CreateDatasetGroupResponseDict(TypedDict):
    dataset_group_arn: NotRequired[str]
