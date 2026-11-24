from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DescribeDatasetImportJobRequest(SdkBaseModel):
    dataset_import_job_arn: str = Field(alias="DatasetImportJobArn")
    """The Amazon Resource Name (ARN) of the dataset import job."""


class DescribeDatasetImportJobRequestDict(TypedDict):
    dataset_import_job_arn: str
