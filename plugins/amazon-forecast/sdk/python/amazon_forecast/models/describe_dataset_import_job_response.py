from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .data_source import DataSource, DataSourceDict
from .enums.import_mode1 import ImportMode1OrStr
from .statistics import Statistics, StatisticsDict


class DescribeDatasetImportJobResponse(SdkBaseModel):
    dataset_import_job_name: Optional[str] = Field(default=UNSET, alias="DatasetImportJobName")
    """The name of the dataset import job."""

    dataset_import_job_arn: Optional[str] = Field(default=UNSET, alias="DatasetImportJobArn")
    """The ARN of the dataset import job."""

    dataset_arn: Optional[str] = Field(default=UNSET, alias="DatasetArn")
    """The Amazon Resource Name (ARN) of the dataset that the training data was imported to."""

    timestamp_format: Optional[str] = Field(default=UNSET, alias="TimestampFormat")
    """The format of timestamps in the dataset. The format that you specify depends on the DataFrequency specified when
    the dataset was created. The following formats are supported "yyyy-MM-dd" For the following data frequencies: Y, M,
    W, and D "yyyy-MM-dd HH:mm:ss" For the following data frequencies: H, 30min, 15min, and 1min; and optionally, for:
    Y, M, W, and D"""

    time_zone: Optional[str] = Field(default=UNSET, alias="TimeZone")
    """The single time zone applied to every item in the dataset"""

    use_geolocation_for_time_zone: Optional[bool] = Field(default=UNSET, alias="UseGeolocationForTimeZone")
    """Whether TimeZone is automatically derived from the geolocation attribute."""

    geolocation_format: Optional[str] = Field(default=UNSET, alias="GeolocationFormat")
    """The format of the geolocation attribute. Valid Values:"LAT_LONG" and "CC_POSTALCODE"."""

    data_source: Optional[DataSource] = Field(default=UNSET, alias="DataSource")
    estimated_time_remaining_in_minutes: Optional[int] = Field(default=UNSET, alias="EstimatedTimeRemainingInMinutes")
    """The estimated time remaining in minutes for the dataset import job to complete."""

    field_statistics: Optional[dict[str, Statistics]] = Field(default=UNSET, alias="FieldStatistics")
    """Statistical information about each field in the input data."""

    data_size: Optional[float] = Field(default=UNSET, alias="DataSize")
    """The size of the dataset in gigabytes (GB) after the import job has finished."""

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

    format: Optional[str] = Field(default=UNSET, alias="Format")
    """The format of the imported data, CSV or PARQUET."""

    import_mode: Optional[ImportMode1OrStr] = Field(default=UNSET, alias="ImportMode")
    """The import mode of the dataset import job, FULL or INCREMENTAL."""


class DescribeDatasetImportJobResponseDict(TypedDict):
    dataset_import_job_name: NotRequired[str]
    dataset_import_job_arn: NotRequired[str]
    dataset_arn: NotRequired[str]
    timestamp_format: NotRequired[str]
    time_zone: NotRequired[str]
    use_geolocation_for_time_zone: NotRequired[bool]
    geolocation_format: NotRequired[str]
    data_source: NotRequired[DataSourceDict]
    estimated_time_remaining_in_minutes: NotRequired[int]
    field_statistics: NotRequired[dict[str, StatisticsDict]]
    data_size: NotRequired[float]
    status: NotRequired[str]
    message: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modification_time: NotRequired[RFC3339DateTime]
    format: NotRequired[str]
    import_mode: NotRequired[ImportMode1OrStr]
