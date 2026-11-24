from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status import StatusOrStr


class RunStatusResponse(SdkBaseModel):
    """Minimal poll target: just the run's status. Poll this until terminal (cheap indexed lookup, tiny payload — never
    the task/result text), then fetch the full RunSummary once via GET /runs/{id}. Mirrors v2's GET
    /tasks/{id}/status."""

    status: StatusOrStr


class RunStatusResponseDict(TypedDict):
    status: StatusOrStr
