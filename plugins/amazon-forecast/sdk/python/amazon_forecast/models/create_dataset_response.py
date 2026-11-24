from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateDatasetResponse(SdkBaseModel):
    dataset_arn: Optional[str] = Field(default=UNSET, alias="DatasetArn")
    """The Amazon Resource Name (ARN) of the dataset."""


class CreateDatasetResponseDict(TypedDict):
    dataset_arn: NotRequired[str]
