from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DecisionEngineErrorResponse(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    message: str
    """Why the request failed."""


class DecisionEngineErrorResponseDict(TypedDict):
    message: str
