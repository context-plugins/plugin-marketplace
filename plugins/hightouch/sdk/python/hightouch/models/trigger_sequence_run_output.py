from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TriggerSequenceRunOutput(SdkBaseModel):
    """The output of a trigger action to run sync sequences"""

    model_config = ConfigDict(extra="forbid")

    id: str
    """The id of the triggered sync sequence run."""


class TriggerSequenceRunOutputDict(TypedDict):
    id: str
