from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateDatasetImportJobResponse(SdkBaseModel):
    dataset_import_job_arn: Optional[str] = Field(default=UNSET, alias="DatasetImportJobArn")
    """The Amazon Resource Name (ARN) of the dataset import job."""


class CreateDatasetImportJobResponseDict(TypedDict):
    dataset_import_job_arn: NotRequired[str]
