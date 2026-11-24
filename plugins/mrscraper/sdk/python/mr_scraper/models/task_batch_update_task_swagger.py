from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.task_browser_type import TaskBrowserTypeOrStr
from .enums.task_device_os import TaskDeviceOsOrStr
from .enums.task_task_status import TaskTaskStatusOrStr


class TaskBatchUpdateTaskSwagger(SdkBaseModel):
    action: Optional[str] = UNSET
    browser_type: Optional[TaskBrowserTypeOrStr] = Field(default=UNSET, alias="browserType")
    callback_url: Optional[str] = Field(default=UNSET, alias="callbackUrl")
    device_os: Optional[TaskDeviceOsOrStr] = Field(default=UNSET, alias="deviceOs")
    domain: Optional[str] = UNSET
    fingerprint_id: Optional[int] = Field(default=UNSET, alias="fingerprintId")
    id: int
    job_id: Optional[int] = Field(default=UNSET, alias="jobId")
    proxy: Optional[str] = UNSET
    result: Optional[str] = UNSET
    retry_count: Optional[int] = Field(default=UNSET, alias="retryCount")
    scrape_time: Optional[float] = Field(default=UNSET, alias="scrapeTime")
    solution: Optional[str] = UNSET
    status: Optional[TaskTaskStatusOrStr] = UNSET
    status_message: Optional[str] = Field(default=UNSET, alias="statusMessage")
    task_details: Optional[Any] = Field(default=UNSET, alias="taskDetails")
    token_usage: Optional[int] = Field(default=UNSET, alias="tokenUsage")


class TaskBatchUpdateTaskSwaggerDict(TypedDict):
    action: NotRequired[str]
    browser_type: NotRequired[TaskBrowserTypeOrStr]
    callback_url: NotRequired[str]
    device_os: NotRequired[TaskDeviceOsOrStr]
    domain: NotRequired[str]
    fingerprint_id: NotRequired[int]
    id: int
    job_id: NotRequired[int]
    proxy: NotRequired[str]
    result: NotRequired[str]
    retry_count: NotRequired[int]
    scrape_time: NotRequired[float]
    solution: NotRequired[str]
    status: NotRequired[TaskTaskStatusOrStr]
    status_message: NotRequired[str]
    task_details: NotRequired[Any]
    token_usage: NotRequired[int]
