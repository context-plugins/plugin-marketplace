from __future__ import annotations

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IncidentCreate(SdkBaseModel):
    summary: str
    description: Optional[str] = UNSET
    requester_email: EmailStr
    call: Optional[bool] = UNSET
    sms: Optional[bool] = UNSET
    email: Optional[bool] = UNSET
    push: Optional[bool] = UNSET
    team_wait: Optional[int] = UNSET
    policy_id: Optional[str] = UNSET


class IncidentCreateDict(TypedDict):
    summary: str
    description: NotRequired[str]
    requester_email: EmailStr
    call: NotRequired[bool]
    sms: NotRequired[bool]
    email: NotRequired[bool]
    push: NotRequired[bool]
    team_wait: NotRequired[int]
    policy_id: NotRequired[str]
