from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1ReportsRevisionBriefsRequest(SdkBaseModel):
    thread_ids: Optional[list[UUID]] = Field(default=UNSET, alias="threadIds")
    instructions: Optional[str] = UNSET


class ApiV1ReportsRevisionBriefsRequestDict(TypedDict):
    thread_ids: NotRequired[list[UUID]]
    instructions: NotRequired[str]
