from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TriggerRunOutput(SdkBaseModel):
    """The output of a trigger action to run syncs"""

    model_config = ConfigDict(extra="forbid")

    id: str
    """The id of the triggered sync run. This can be passed to ``/sync/runs`` to get the run's status."""


class TriggerRunOutputDict(TypedDict):
    id: str
