from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AwsSupportedFeature(SdkBaseModel):
    name: Optional[str] = UNSET
    """Feature name."""

    has_required_permissions: Optional[bool] = Field(default=UNSET, alias="hasRequiredPermissions")
    """Whether the role has the required permissions for this feature."""


class AwsSupportedFeatureDict(TypedDict):
    name: NotRequired[str]
    has_required_permissions: NotRequired[bool]
