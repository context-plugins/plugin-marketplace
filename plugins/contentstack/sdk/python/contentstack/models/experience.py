from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status_contentstack_personalize_management_experiences_api import (
    StatusContentstackPersonalizeManagementExperiencesApiOrStr,
)
from .enums.type import TypeOrStr
from .experience_variant import ExperienceVariant, ExperienceVariantDict


class Experience(SdkBaseModel):
    """A personalization experience with variant and audience configuration."""

    uid: Optional[str] = UNSET
    """Unique identifier of the experience."""

    name: Optional[str] = UNSET
    """Display name of the experience."""

    type_: Optional[TypeOrStr] = Field(default=UNSET, alias="type")
    """Type of experience — SEGMENTED for rule-based or AB_TEST for split testing."""

    status: Optional[StatusContentstackPersonalizeManagementExperiencesApiOrStr] = UNSET
    """Current status of the experience."""

    variants: Optional[list[ExperienceVariant]] = UNSET
    """List of content variants included in the experience."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """ISO 8601 timestamp when the experience was created."""


class ExperienceDict(TypedDict):
    uid: NotRequired[str]
    name: NotRequired[str]
    type_: NotRequired[TypeOrStr]
    status: NotRequired[StatusContentstackPersonalizeManagementExperiencesApiOrStr]
    variants: NotRequired[list[ExperienceVariantDict]]
    created_at: NotRequired[RFC3339DateTime]
