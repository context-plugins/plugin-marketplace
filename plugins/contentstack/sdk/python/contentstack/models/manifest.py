from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .manifest_experience import ManifestExperience, ManifestExperienceDict


class Manifest(SdkBaseModel):
    """The personalization manifest containing active experiences and their variant assignments for the current user."""

    experiences: Optional[list[ManifestExperience]] = UNSET
    """List of active experience objects with assigned variants."""


class ManifestDict(TypedDict):
    experiences: NotRequired[list[ManifestExperienceDict]]
