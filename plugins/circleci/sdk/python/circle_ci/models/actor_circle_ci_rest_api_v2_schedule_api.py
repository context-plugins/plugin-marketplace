from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ActorCircleCiRestApiV2ScheduleApi(SdkBaseModel):
    """The user who created the schedule"""

    id: Optional[UUID] = UNSET
    """The actor ID"""

    login: Optional[str] = UNSET
    """The actor login"""

    name: Optional[str] = UNSET
    """The actor name"""


class ActorCircleCiRestApiV2ScheduleApiDict(TypedDict):
    id: NotRequired[UUID]
    login: NotRequired[str]
    name: NotRequired[str]
