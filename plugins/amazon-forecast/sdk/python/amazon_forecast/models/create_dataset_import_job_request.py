from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .data_source import DataSource, DataSourceDict
from .enums.import_mode import ImportModeOrStr
from .tag_model import TagModel, TagModelDict


class CreateDatasetImportJobRequest(SdkBaseModel):
    dataset_import_job_name: str = Field(alias="DatasetImportJobName")
    """The name for the dataset import job. We recommend including the current timestamp in the name, for example,
    20190721DatasetImport. This can help you avoid getting a ResourceAlreadyExistsException exception."""

    dataset_arn: str = Field(alias="DatasetArn")
    """The Amazon Resource Name (ARN) of the Amazon Forecast dataset that you want to import data to."""

    data_source: DataSource = Field(alias="DataSource")
    timestamp_format: Optional[str] = Field(default=UNSET, alias="TimestampFormat")
    """The format of timestamps in the dataset. The format that you specify depends on the DataFrequency specified when
    the dataset was created. The following formats are supported "yyyy-MM-dd" For the following data frequencies: Y, M,
    W, and D "yyyy-MM-dd HH:mm:ss" For the following data frequencies: H, 30min, 15min, and 1min; and optionally, for:
    Y, M, W, and D If the format isn't specified, Amazon Forecast expects the format to be "yyyy-MM-dd HH:mm:ss"."""

    time_zone: Optional[str] = Field(default=UNSET, alias="TimeZone")
    """A single time zone for every item in your dataset. This option is ideal for datasets with all timestamps within a
    single time zone, or if all timestamps are normalized to a single time zone. Refer to the Joda-Time API for a
    complete list of valid time zone names."""

    use_geolocation_for_time_zone: Optional[bool] = Field(default=UNSET, alias="UseGeolocationForTimeZone")
    """Automatically derive time zone information from the geolocation attribute. This option is ideal for datasets that
    contain timestamps in multiple time zones and those timestamps are expressed in local time."""

    geolocation_format: Optional[str] = Field(default=UNSET, alias="GeolocationFormat")
    """The format of the geolocation attribute. The geolocation attribute can be formatted in one of two ways: LAT_LONG
    - the latitude and longitude in decimal format (Example: 47.61_-122.33). CC_POSTALCODE (US Only) - the country code
    (US), followed by the 5-digit ZIP code (Example: US_98121)."""

    tags: Optional[list[TagModel]] = Field(default=UNSET, alias="Tags")
    """The optional metadata that you apply to the dataset import job to help you categorize and organize them. Each tag
    consists of a key and an optional value, both of which you define. The following basic restrictions apply to tags:
    Maximum number of tags per resource - 50. For each resource, each tag key must be unique, and each tag key can have
    only one value. Maximum key length - 128 Unicode characters in UTF-8. Maximum value length - 256 Unicode characters
    in UTF-8. If your tagging schema is used across multiple services and resources, remember that other services may
    have restrictions on allo"""

    format: Optional[str] = Field(default=UNSET, alias="Format")
    """The format of the imported data, CSV or PARQUET. The default value is CSV."""

    import_mode: Optional[ImportModeOrStr] = Field(default=UNSET, alias="ImportMode")
    """Specifies whether the dataset import job is a FULL or INCREMENTAL import. A FULL dataset import replaces all of
    the existing data with the newly imported data. An INCREMENTAL import appends the imported data to the existing
    data."""


class CreateDatasetImportJobRequestDict(TypedDict):
    dataset_import_job_name: str
    dataset_arn: str
    data_source: DataSourceDict
    timestamp_format: NotRequired[str]
    time_zone: NotRequired[str]
    use_geolocation_for_time_zone: NotRequired[bool]
    geolocation_format: NotRequired[str]
    tags: NotRequired[list[TagModelDict]]
    format: NotRequired[str]
    import_mode: NotRequired[ImportModeOrStr]
