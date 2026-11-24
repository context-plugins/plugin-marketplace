from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Session(SdkBaseModel):
    hashed_id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    duration: Optional[int] = UNSET
    os: Optional[str] = UNSET
    os_version: Optional[str] = UNSET
    browser_version: Optional[str] = UNSET
    browser: Optional[str] = UNSET
    device: OptionalNullable[str] = UNSET
    status: Optional[str] = UNSET
    reason: OptionalNullable[str] = UNSET
    build_name: Optional[str] = UNSET
    project_name: Optional[str] = UNSET
    logs: Optional[str] = UNSET
    browser_url: Optional[str] = UNSET
    public_url: Optional[str] = UNSET
    appium_logs_url: Optional[str] = UNSET
    video_url: Optional[str] = UNSET
    browser_console_logs_url: Optional[str] = UNSET
    har_logs_url: Optional[str] = UNSET
    selenium_logs_url: Optional[str] = UNSET
    created_at: Optional[RFC3339DateTime] = UNSET
    updated_at: Optional[RFC3339DateTime] = UNSET


class SessionDict(TypedDict):
    hashed_id: NotRequired[str]
    name: NotRequired[str]
    duration: NotRequired[int]
    os: NotRequired[str]
    os_version: NotRequired[str]
    browser_version: NotRequired[str]
    browser: NotRequired[str]
    device: NotRequired[str | None]
    status: NotRequired[str]
    reason: NotRequired[str | None]
    build_name: NotRequired[str]
    project_name: NotRequired[str]
    logs: NotRequired[str]
    browser_url: NotRequired[str]
    public_url: NotRequired[str]
    appium_logs_url: NotRequired[str]
    video_url: NotRequired[str]
    browser_console_logs_url: NotRequired[str]
    har_logs_url: NotRequired[str]
    selenium_logs_url: NotRequired[str]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
