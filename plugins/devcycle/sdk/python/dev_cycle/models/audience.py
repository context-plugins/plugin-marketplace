from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .audience_operator import AudienceOperator, AudienceOperatorDict
from .enums.source import SourceOrStr


class Audience(SdkBaseModel):
    name: Optional[str] = UNSET
    """Audience display name, must be set for project-level audiences."""

    key: Optional[str] = UNSET
    """Audience unique project-level key, must be set for project-level audiences. Must only contain lower-case
    characters and ``_``, ``-`` or ``.``."""

    description: Optional[str] = UNSET
    """Audience description."""

    id: str = Field(alias="_id")
    """A unique Audience ID"""

    project: str = Field(alias="_project")
    """The Project owning the Audience"""

    filters: AudienceOperator
    """Audience filters, describing logic for segmenting users"""

    source: Optional[SourceOrStr] = UNSET
    """Source that created the Audience"""

    created_by: Optional[str] = Field(default=UNSET, alias="_createdBy")
    """User who created the Audience"""

    created_at: RFC3339DateTime = Field(alias="createdAt")
    """The date the feature was created"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """The date the feature was last updated"""

    tags: Optional[list[str]] = UNSET
    """Tags to organize project-level audiences on the dashboard"""

    readonly: bool
    """Readonly state based on the Users Permission to modify the Audience"""

    has_usage: Optional[bool] = Field(default=UNSET, alias="hasUsage")
    """Whether the audience is in use by a feature"""


class AudienceDict(TypedDict):
    name: NotRequired[str]
    key: NotRequired[str]
    description: NotRequired[str]
    id: str
    project: str
    filters: AudienceOperatorDict
    source: NotRequired[SourceOrStr]
    created_by: NotRequired[str]
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    tags: NotRequired[list[str]]
    readonly: bool
    has_usage: NotRequired[bool]
