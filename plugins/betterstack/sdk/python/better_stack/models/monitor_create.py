from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.monitor_type import MonitorTypeOrStr
from .request_header import RequestHeader, RequestHeaderDict


class MonitorCreate(SdkBaseModel):
    url: str
    monitor_type: MonitorTypeOrStr
    pronounceable_name: Optional[str] = UNSET
    check_frequency: Optional[int] = UNSET
    """Seconds between checks."""

    request_headers: Optional[list[RequestHeader]] = UNSET
    request_body: Optional[str] = UNSET
    request_timeout: Optional[int] = UNSET
    recovery_period: Optional[int] = UNSET
    confirmation_period: Optional[int] = UNSET
    regions: Optional[list[str]] = UNSET
    email: Optional[bool] = UNSET
    sms: Optional[bool] = UNSET
    call: Optional[bool] = UNSET
    push: Optional[bool] = UNSET
    team_wait: Optional[int] = UNSET
    paused: Optional[bool] = UNSET
    follow_redirects: Optional[bool] = UNSET
    verify_ssl: Optional[bool] = UNSET
    ssl_expiration: Optional[int] = UNSET
    domain_expiration: Optional[int] = UNSET
    expected_status_codes: Optional[list[int]] = UNSET


class MonitorCreateDict(TypedDict):
    url: str
    monitor_type: MonitorTypeOrStr
    pronounceable_name: NotRequired[str]
    check_frequency: NotRequired[int]
    request_headers: NotRequired[list[RequestHeaderDict]]
    request_body: NotRequired[str]
    request_timeout: NotRequired[int]
    recovery_period: NotRequired[int]
    confirmation_period: NotRequired[int]
    regions: NotRequired[list[str]]
    email: NotRequired[bool]
    sms: NotRequired[bool]
    call: NotRequired[bool]
    push: NotRequired[bool]
    team_wait: NotRequired[int]
    paused: NotRequired[bool]
    follow_redirects: NotRequired[bool]
    verify_ssl: NotRequired[bool]
    ssl_expiration: NotRequired[int]
    domain_expiration: NotRequired[int]
    expected_status_codes: NotRequired[list[int]]
