from __future__ import annotations

from uuid import UUID

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AppInfo(SdkBaseModel):
    id: Optional[UUID] = UNSET
    name: Optional[str] = UNSET
    publisher: Optional[str] = UNSET
    version: Optional[str] = UNSET
    state: Optional[str] = UNSET
    last_operation_id: Optional[UUID] = Field(default=UNSET, alias="lastOperationId")
    last_update_attempt_result: Optional[str] = Field(default=UNSET, alias="lastUpdateAttemptResult")


class AppInfoDict(TypedDict):
    id: NotRequired[UUID]
    name: NotRequired[str]
    publisher: NotRequired[str]
    version: NotRequired[str]
    state: NotRequired[str]
    last_operation_id: NotRequired[UUID]
    last_update_attempt_result: NotRequired[str]
