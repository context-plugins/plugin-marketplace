from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr
from .target import Target, TargetDict


class FeatureConfig(SdkBaseModel):
    feature: str = Field(alias="_feature")
    """ID of the Feature owning the Configuration"""

    environment: str = Field(alias="_environment")
    """ID of the Environment owning the Configuration"""

    created_by: Optional[str] = Field(default=UNSET, alias="_createdBy")
    """User who created the Feature Configuration"""

    status: StatusOrStr
    """Status of the Feature Configuration"""

    started_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="startedAt")
    """Date the Feature Configuration was started"""

    updated_at: RFC3339DateTime = Field(alias="updatedAt")
    """The date the Feature Configuration was last updated"""

    targets: list[Target]
    """The targets to evaluate what variation a user should be delivered"""

    readonly: bool
    """Controls whether the feature configuration is editable for a given user"""

    has_static_config: bool = Field(alias="hasStaticConfig")
    """Flag to indicate if the Feature owning the configuration has been marked as complete. If true, the user targeting
    rules are ignored and the static variation is always used."""


class FeatureConfigDict(TypedDict):
    feature: str
    environment: str
    created_by: NotRequired[str]
    status: StatusOrStr
    started_at: NotRequired[RFC3339DateTime]
    updated_at: RFC3339DateTime
    targets: list[TargetDict]
    readonly: bool
    has_static_config: bool
