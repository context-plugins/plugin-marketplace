from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1DebugSession(SdkBaseModel):
    timeout: Optional[str] = UNSET
    """Optional. The time in seconds after which this DebugSession should end. This value will override the value in
    query param, if both are provided."""

    tracesize: Optional[int] = UNSET
    """Optional. The maximum number of bytes captured from the response payload. Min = 0, Max = 5120, Default = 5120."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The first transaction creation timestamp, recorded by UAP."""

    name: Optional[str] = UNSET
    """A unique ID for this DebugSession."""

    count: Optional[int] = UNSET
    """Optional. The number of request to be traced. Min = 1, Max = 15, Default = 10."""

    validity: Optional[int] = UNSET
    """Optional. The length of time, in seconds, that this debug session is valid, starting from when it's received in
    the control plane. Min = 1, Max = 15, Default = 10."""

    filter: Optional[str] = UNSET
    """Optional. A conditional statement which is evaluated against the request message to determine if it should be
    traced. Syntax matches that of on API Proxy bundle flow Condition."""


class GoogleCloudApigeeV1DebugSessionDict(TypedDict):
    timeout: NotRequired[str]
    tracesize: NotRequired[int]
    create_time: NotRequired[str]
    name: NotRequired[str]
    count: NotRequired[int]
    validity: NotRequired[int]
    filter: NotRequired[str]
