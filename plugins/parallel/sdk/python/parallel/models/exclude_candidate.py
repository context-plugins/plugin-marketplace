from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ExcludeCandidate(SdkBaseModel):
    """Exclude candidate input model for FindAll run."""

    name: str
    """Name of the entity to exclude from results."""

    url: str
    """URL of the entity to exclude from results."""


class ExcludeCandidateDict(TypedDict):
    name: str
    url: str
