from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .active_users import ActiveUsers, ActiveUsersDict
from .usage import Usage, UsageDict


class ApiV1ReportingApiUserActivityResponse(SdkBaseModel):
    active_users: Optional[ActiveUsers] = UNSET
    edits_accepted: Optional[int] = UNSET
    edits_ignored: Optional[int] = UNSET
    edits_shown: Optional[int] = UNSET
    usage: Optional[Usage] = UNSET
    """Present only when the request sent return_usage: true. characters is the billable character count the request
    submitted; see the return_usage request field for the exact semantics."""


class ApiV1ReportingApiUserActivityResponseDict(TypedDict):
    active_users: NotRequired[ActiveUsersDict]
    edits_accepted: NotRequired[int]
    edits_ignored: NotRequired[int]
    edits_shown: NotRequired[int]
    usage: NotRequired[UsageDict]
