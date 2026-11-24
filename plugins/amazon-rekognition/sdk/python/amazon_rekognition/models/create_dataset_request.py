from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dataset_source import DatasetSource, DatasetSourceDict
from .enums.dataset_type import DatasetTypeOrStr


class CreateDatasetRequest(SdkBaseModel):
    dataset_source: Optional[DatasetSource] = Field(default=UNSET, alias="DatasetSource")
    dataset_type: DatasetTypeOrStr = Field(alias="DatasetType")
    """The type of the dataset. Specify TRAIN to create a training dataset. Specify TEST to create a test dataset."""

    project_arn: str = Field(alias="ProjectArn")
    """The ARN of the Amazon Rekognition Custom Labels project to which you want to asssign the dataset."""

    tags: Optional[dict[str, str]] = Field(default=UNSET, alias="Tags")
    """A set of tags (key-value pairs) that you want to attach to the dataset."""


class CreateDatasetRequestDict(TypedDict):
    dataset_source: NotRequired[DatasetSourceDict]
    dataset_type: DatasetTypeOrStr
    project_arn: str
    tags: NotRequired[dict[str, str]]
