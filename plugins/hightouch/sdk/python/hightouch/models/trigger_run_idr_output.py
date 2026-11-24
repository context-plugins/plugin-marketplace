from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TriggerRunIdrOutput(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    id: str
    """The id of the triggered run."""


class TriggerRunIdrOutputDict(TypedDict):
    id: str
