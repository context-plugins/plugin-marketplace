from __future__ import annotations

from typing import Any

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class AuditLogEntity(SdkBaseModel):
    date: RFC3339DateTime
    a0_user: str
    changes: list[Any]


class AuditLogEntityDict(TypedDict):
    date: RFC3339DateTime
    a0_user: str
    changes: list[Any]
