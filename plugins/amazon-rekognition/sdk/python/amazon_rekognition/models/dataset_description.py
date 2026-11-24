from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .dataset_stats import DatasetStats, DatasetStatsDict
from .enums.status import StatusOrStr
from .enums.status_message_code import StatusMessageCodeOrStr


class DatasetDescription(SdkBaseModel):
    creation_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTimestamp")
    """The Unix timestamp for the time and date that the dataset was created."""

    last_updated_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastUpdatedTimestamp")
    """The Unix timestamp for the date and time that the dataset was last updated."""

    status: Optional[StatusOrStr] = Field(default=UNSET, alias="Status")
    """The status of the dataset."""

    status_message: Optional[str] = Field(default=UNSET, alias="StatusMessage")
    """The status message for the dataset."""

    status_message_code: Optional[StatusMessageCodeOrStr] = Field(default=UNSET, alias="StatusMessageCode")
    """The status message code for the dataset operation. If a service error occurs, try the API call again later. If a
    client error occurs, check the input parameters to the dataset API call that failed."""

    dataset_stats: Optional[DatasetStats] = Field(default=UNSET, alias="DatasetStats")


class DatasetDescriptionDict(TypedDict):
    creation_timestamp: NotRequired[RFC3339DateTime]
    last_updated_timestamp: NotRequired[RFC3339DateTime]
    status: NotRequired[StatusOrStr]
    status_message: NotRequired[str]
    status_message_code: NotRequired[StatusMessageCodeOrStr]
    dataset_stats: NotRequired[DatasetStatsDict]
