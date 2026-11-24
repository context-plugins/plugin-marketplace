from __future__ import annotations

from typing import Literal
from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ApprovalDeliverdDevReportsApi(SdkBaseModel):
    id: UUID
    status: Literal["pending"] = "pending"
    rule: str | None
    reason: str | None


class ApprovalDeliverdDevReportsApiDict(TypedDict):
    id: UUID
    status: Literal["pending"]
    rule: str | None
    reason: str | None
