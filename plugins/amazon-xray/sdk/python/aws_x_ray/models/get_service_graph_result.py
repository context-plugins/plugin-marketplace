from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .service import Service, ServiceDict


class GetServiceGraphResult(SdkBaseModel):
    start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="StartTime")
    """The start of the time frame for which the graph was generated."""

    end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EndTime")
    """The end of the time frame for which the graph was generated."""

    services: Optional[list[Service]] = Field(default=UNSET, alias="Services")
    """The services that have processed a traced request during the specified time frame."""

    contains_old_group_versions: Optional[bool] = Field(default=UNSET, alias="ContainsOldGroupVersions")
    """A flag indicating whether the group's filter expression has been consistent, or if the returned service graph may
    show traces from an older version of the group's filter expression."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token."""


class GetServiceGraphResultDict(TypedDict):
    start_time: NotRequired[RFC3339DateTime]
    end_time: NotRequired[RFC3339DateTime]
    services: NotRequired[list[ServiceDict]]
    contains_old_group_versions: NotRequired[bool]
    next_token: NotRequired[str]
