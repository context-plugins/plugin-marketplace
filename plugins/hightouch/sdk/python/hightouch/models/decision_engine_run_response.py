from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DecisionEngineRunResponse(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    flows_enqueued: float = Field(alias="flowsEnqueued")
    """Number of flows that were enqueued for execution"""


class DecisionEngineRunResponseDict(TypedDict):
    flows_enqueued: float
