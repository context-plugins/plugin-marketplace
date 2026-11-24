from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class IdrQueueForReprocessingOutput(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    request_id: str = Field(alias="requestId")
    """ID associated with the reprocessing request. This can be used to query the status of the request."""


class IdrQueueForReprocessingOutputDict(TypedDict):
    request_id: str
