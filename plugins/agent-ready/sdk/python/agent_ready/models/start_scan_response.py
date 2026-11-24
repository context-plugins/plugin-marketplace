from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status_agent_ready_scans_api import StatusAgentReadyScansApiOrStr


class StartScanResponse(SdkBaseModel):
    """Async-job acknowledgement returned with 202."""

    id: str
    status: StatusAgentReadyScansApiOrStr
    """Lifecycle state of a scan. Poll until status is 'completed' or 'failed'."""

    url: str
    poll_url: str = Field(alias="pollUrl")


class StartScanResponseDict(TypedDict):
    id: str
    status: StatusAgentReadyScansApiOrStr
    url: str
    poll_url: str
