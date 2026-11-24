from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .group import Group, GroupDict


class MetricsRequest(SdkBaseModel):
    """HAR-formatted log entry submitted by a ReadMe Metrics SDK."""

    id: Optional[str] = Field(default=UNSET, alias="_id")
    group: Optional[Group] = UNSET
    client_ip_address: Optional[str] = Field(default=UNSET, alias="clientIPAddress")
    development: Optional[bool] = UNSET
    request: Optional[Any] = UNSET
    """HAR request object"""

    response: Optional[Any] = UNSET
    """HAR response object"""


class MetricsRequestDict(TypedDict):
    id: NotRequired[str]
    group: NotRequired[GroupDict]
    client_ip_address: NotRequired[str]
    development: NotRequired[bool]
    request: NotRequired[Any]
    response: NotRequired[Any]
