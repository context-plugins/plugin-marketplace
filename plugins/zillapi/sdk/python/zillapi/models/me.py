from __future__ import annotations

from uuid import UUID

from pydantic import EmailStr
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .credits import Credits, CreditsDict
from .enums.plan_id import PlanIdOrStr
from .enums.status import StatusOrStr
from .plan import Plan, PlanDict


class Me(SdkBaseModel):
    id: Optional[UUID] = UNSET
    email: Optional[EmailStr] = UNSET
    plan_id: Optional[PlanIdOrStr] = UNSET
    current_period_start: Optional[RFC3339DateTime] = UNSET
    status: Optional[StatusOrStr] = UNSET
    plan: Optional[Plan] = UNSET
    credits: Optional[Credits] = UNSET


class MeDict(TypedDict):
    id: NotRequired[UUID]
    email: NotRequired[EmailStr]
    plan_id: NotRequired[PlanIdOrStr]
    current_period_start: NotRequired[RFC3339DateTime]
    status: NotRequired[StatusOrStr]
    plan: NotRequired[PlanDict]
    credits: NotRequired[CreditsDict]
