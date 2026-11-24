from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RunTransferJobRequest(SdkBaseModel):
    """Request passed to RunTransferJob."""

    project_id: Optional[str] = Field(default=UNSET, alias="projectId")
    """Required. The ID of the Google Cloud project that owns the transfer job."""


class RunTransferJobRequestDict(TypedDict):
    project_id: NotRequired[str]
