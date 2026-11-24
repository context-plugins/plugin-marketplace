from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.code import CodeOrStr


class BulkStatusFailure(SdkBaseModel):
    input: str
    resolved_id: Optional[UUID] = UNSET
    reason: str
    code: CodeOrStr


class BulkStatusFailureDict(TypedDict):
    input: str
    resolved_id: NotRequired[UUID]
    reason: str
    code: CodeOrStr
