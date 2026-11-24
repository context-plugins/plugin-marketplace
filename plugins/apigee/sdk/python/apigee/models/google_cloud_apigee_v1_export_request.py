from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_date_range2 import GoogleCloudApigeeV1DateRange2, GoogleCloudApigeeV1DateRange2Dict


class GoogleCloudApigeeV1ExportRequest(SdkBaseModel):
    """Request body for [CreateExportRequest]"""

    csv_delimiter: Optional[str] = Field(default=UNSET, alias="csvDelimiter")
    r"""Optional. Delimiter used in the CSV file, if ``outputFormat`` is set to ``csv``. Defaults to the ``,`` (comma)
    character. Supported delimiter characters include comma (``,``), pipe (``|``), and tab (``\t``)."""

    description: Optional[str] = UNSET
    """Optional. Description of the export job."""

    datastore_name: Optional[str] = Field(default=UNSET, alias="datastoreName")
    """Required. Name of the preconfigured datastore."""

    output_format: Optional[str] = Field(default=UNSET, alias="outputFormat")
    """Optional. Output format of the export. Valid values include: ``csv`` or ``json``. Defaults to ``json``. Note:
    Configure the delimiter for CSV output using the ``csvDelimiter`` property."""

    name: Optional[str] = UNSET
    """Required. Display name of the export job."""

    date_range: Optional[GoogleCloudApigeeV1DateRange2] = Field(default=UNSET, alias="dateRange")
    """Required. Date range of the data to export."""


class GoogleCloudApigeeV1ExportRequestDict(TypedDict):
    csv_delimiter: NotRequired[str]
    description: NotRequired[str]
    datastore_name: NotRequired[str]
    output_format: NotRequired[str]
    name: NotRequired[str]
    date_range: NotRequired[GoogleCloudApigeeV1DateRange2Dict]
