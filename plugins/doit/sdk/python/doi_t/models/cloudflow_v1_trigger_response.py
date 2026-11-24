from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CloudflowV1TriggerResponse(SdkBaseModel):
    execution_link: str = Field(alias="executionLink")
    """Console URL for the started CloudFlow execution history entry."""


class CloudflowV1TriggerResponseDict(TypedDict):
    execution_link: str
