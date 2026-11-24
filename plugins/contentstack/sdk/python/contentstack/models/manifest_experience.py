from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ManifestExperience(SdkBaseModel):
    """An active experience entry in the manifest with variant assignment."""

    experience_uid: Optional[str] = UNSET
    """Unique identifier of the experience."""

    experience_short_uid: Optional[str] = UNSET
    """Short identifier of the experience for use in content querying."""

    variant_uid: Optional[str] = UNSET
    """Unique identifier of the variant assigned to this user."""

    variant_short_uid: Optional[str] = UNSET
    """Short identifier of the variant for use in content querying."""


class ManifestExperienceDict(TypedDict):
    experience_uid: NotRequired[str]
    experience_short_uid: NotRequired[str]
    variant_uid: NotRequired[str]
    variant_short_uid: NotRequired[str]
