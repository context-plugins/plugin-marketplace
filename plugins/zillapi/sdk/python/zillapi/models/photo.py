from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .mixed_sources import MixedSources, MixedSourcesDict


class Photo(SdkBaseModel):
    url: Optional[str] = UNSET
    """Default-resolution JPEG URL."""

    caption: OptionalNullable[str] = UNSET
    subject_type: OptionalNullable[str] = Field(default=UNSET, alias="subjectType")
    mixed_sources: Optional[MixedSources] = Field(default=UNSET, alias="mixedSources")


class PhotoDict(TypedDict):
    url: NotRequired[str]
    caption: NotRequired[str | None]
    subject_type: NotRequired[str | None]
    mixed_sources: NotRequired[MixedSourcesDict]
