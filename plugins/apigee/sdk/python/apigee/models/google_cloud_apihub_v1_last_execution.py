from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.result import ResultOrStr


class GoogleCloudApihubV1LastExecution(SdkBaseModel):
    """The result of the last execution of the plugin instance."""

    result_metadata: Optional[str] = Field(default=UNSET, alias="resultMetadata")
    """Output only. The result metadata of the last execution of the plugin instance. This will be a string
    representation of a JSON object and will be available on successful execution."""

    start_time: Optional[str] = Field(default=UNSET, alias="startTime")
    """Output only. The last execution start time of the plugin instance."""

    result: Optional[ResultOrStr] = UNSET
    """Output only. The result of the last execution of the plugin instance."""

    end_time: Optional[str] = Field(default=UNSET, alias="endTime")
    """Output only. The last execution end time of the plugin instance."""

    error_message: Optional[str] = Field(default=UNSET, alias="errorMessage")
    """Output only. Error message describing the failure, if any, during the last execution."""


class GoogleCloudApihubV1LastExecutionDict(TypedDict):
    result_metadata: NotRequired[str]
    start_time: NotRequired[str]
    result: NotRequired[ResultOrStr]
    end_time: NotRequired[str]
    error_message: NotRequired[str]
