from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .audience_operator import AudienceOperator, AudienceOperatorDict


class CreateAudienceDto(SdkBaseModel):
    name: Optional[str] = UNSET
    """Audience display name, must be set for project-level audiences."""

    key: Optional[str] = UNSET
    """Audience unique project-level key, must be set for project-level audiences. Must only contain lower-case
    characters and ``_``, ``-`` or ``.``."""

    description: Optional[str] = UNSET
    """Audience description."""

    filters: AudienceOperator
    """Audience filters, describing logic for segmenting users"""

    tags: Optional[list[str]] = UNSET
    """Tags to organize project-level audiences on the dashboard"""


class CreateAudienceDtoDict(TypedDict):
    name: NotRequired[str]
    key: NotRequired[str]
    description: NotRequired[str]
    filters: AudienceOperatorDict
    tags: NotRequired[list[str]]
