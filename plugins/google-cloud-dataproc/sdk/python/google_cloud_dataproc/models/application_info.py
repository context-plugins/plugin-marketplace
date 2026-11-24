from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .application_attempt_info import ApplicationAttemptInfo, ApplicationAttemptInfoDict
from .enums.application_context_ingestion_status import ApplicationContextIngestionStatusOrStr
from .enums.quantile_data_status import QuantileDataStatusOrStr


class ApplicationInfo(SdkBaseModel):
    """High level information corresponding to an application."""

    attempts: Optional[list[ApplicationAttemptInfo]] = UNSET
    application_id: Optional[str] = Field(default=UNSET, alias="applicationId")
    cores_per_executor: Optional[int] = Field(default=UNSET, alias="coresPerExecutor")
    quantile_data_status: Optional[QuantileDataStatusOrStr] = Field(default=UNSET, alias="quantileDataStatus")
    memory_per_executor_mb: Optional[int] = Field(default=UNSET, alias="memoryPerExecutorMb")
    application_context_ingestion_status: Optional[ApplicationContextIngestionStatusOrStr] = Field(
        default=UNSET, alias="applicationContextIngestionStatus"
    )
    name: Optional[str] = UNSET
    cores_granted: Optional[int] = Field(default=UNSET, alias="coresGranted")
    max_cores: Optional[int] = Field(default=UNSET, alias="maxCores")


class ApplicationInfoDict(TypedDict):
    attempts: NotRequired[list[ApplicationAttemptInfoDict]]
    application_id: NotRequired[str]
    cores_per_executor: NotRequired[int]
    quantile_data_status: NotRequired[QuantileDataStatusOrStr]
    memory_per_executor_mb: NotRequired[int]
    application_context_ingestion_status: NotRequired[ApplicationContextIngestionStatusOrStr]
    name: NotRequired[str]
    cores_granted: NotRequired[int]
    max_cores: NotRequired[int]
