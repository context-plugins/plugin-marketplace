from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteDatasetRequest(SdkBaseModel):
    dataset_arn: str = Field(alias="DatasetArn")
    """The ARN of the Amazon Rekognition Custom Labels dataset that you want to delete."""


class DeleteDatasetRequestDict(TypedDict):
    dataset_arn: str
