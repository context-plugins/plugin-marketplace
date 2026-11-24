from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeepcrawlAcceptedResponse(SdkBaseModel):
    task_id: str = Field(alias="taskId")
    status: Literal["queued"] = "queued"


class DeepcrawlAcceptedResponseDict(TypedDict):
    task_id: str
    status: Literal["queued"]
