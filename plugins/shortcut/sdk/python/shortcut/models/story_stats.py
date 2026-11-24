from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StoryStats(SdkBaseModel):
    """The stats object for Stories"""

    model_config = ConfigDict(extra="forbid")

    num_related_documents: int
    """The number of documents related to this Story."""


class StoryStatsDict(TypedDict):
    num_related_documents: int
