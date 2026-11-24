from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type1 import Type1OrStr
from .experience_variant import ExperienceVariant, ExperienceVariantDict


class CreateExperienceRequest(SdkBaseModel):
    """Parameters for creating or updating an experience."""

    name: str
    """Display name for the experience."""

    type_: Type1OrStr = Field(alias="type")
    """Experience type."""

    variants: Optional[list[ExperienceVariant]] = UNSET
    """Variant definitions for the experience."""


class CreateExperienceRequestDict(TypedDict):
    name: str
    type_: Type1OrStr
    variants: NotRequired[list[ExperienceVariantDict]]
