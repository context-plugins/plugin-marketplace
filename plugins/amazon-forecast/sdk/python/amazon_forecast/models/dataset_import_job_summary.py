from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .data_source import DataSource, DataSourceDict
from .enums.import_mode1 import ImportMode1OrStr


class DatasetImportJobSummary(SdkBaseModel):
    dataset_import_job_arn: Optional[str] = Field(default=UNSET, alias="DatasetImportJobArn")
    """The Amazon Resource Name (ARN) of the dataset import job."""

    dataset_import_job_name: Optional[str] = Field(default=UNSET, alias="DatasetImportJobName")
    """The name of the dataset import job."""

    data_source: Optional[DataSource] = Field(default=UNSET, alias="DataSource")
    status: Optional[str] = Field(default=UNSET, alias="Status")
    """The status of the dataset import job. States include: ACTIVE CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED
    DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED CREATE_STOPPING, CREATE_STOPPED"""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """If an error occurred, an informational message about the error."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """When the dataset import job was created."""

    last_modification_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModificationTime")
    """The last time the resource was modified. The timestamp depends on the status of the job: CREATE_PENDING - The
    CreationTime. CREATE_IN_PROGRESS - The current timestamp. CREATE_STOPPING - The current timestamp. CREATE_STOPPED -
    When the job stopped. ACTIVE or CREATE_FAILED - When the job finished or failed."""

    import_mode: Optional[ImportMode1OrStr] = Field(default=UNSET, alias="ImportMode")
    """The import mode of the dataset import job, FULL or INCREMENTAL."""


class DatasetImportJobSummaryDict(TypedDict):
    dataset_import_job_arn: NotRequired[str]
    dataset_import_job_name: NotRequired[str]
    data_source: NotRequired[DataSourceDict]
    status: NotRequired[str]
    message: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modification_time: NotRequired[RFC3339DateTime]
    import_mode: NotRequired[ImportMode1OrStr]
