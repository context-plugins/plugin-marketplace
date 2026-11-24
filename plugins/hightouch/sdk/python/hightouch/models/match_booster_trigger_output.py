from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class MatchBoosterTriggerOutput(SdkBaseModel):
    """The output of a trigger action to run a Match Booster enrichment."""

    model_config = ConfigDict(extra="forbid")

    id: str
    """The id of the triggered enrichment job."""

    status: str
    """The status of the triggered enrichment job."""

    created_at: str = Field(alias="createdAt")
    """Timestamp when the enrichment job was created."""


class MatchBoosterTriggerOutputDict(TypedDict):
    id: str
    status: str
    created_at: str
