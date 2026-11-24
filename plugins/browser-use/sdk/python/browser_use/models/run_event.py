from __future__ import annotations

from typing import Any
from uuid import UUID

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class RunEvent(SdkBaseModel):
    run_id: UUID = Field(alias="runId")
    id: int
    ts: RFC3339DateTime
    type_: str = Field(alias="type")
    data: Any


class RunEventDict(TypedDict):
    run_id: UUID
    id: int
    ts: RFC3339DateTime
    type_: str
    data: Any
