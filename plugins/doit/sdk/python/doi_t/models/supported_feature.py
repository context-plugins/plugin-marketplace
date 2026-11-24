from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SupportedFeature(SdkBaseModel):
    """A feature supported by a CloudConnect account."""

    name: Optional[str] = UNSET
    """The name of the feature."""

    has_required_permissions: Optional[bool] = Field(default=UNSET, alias="hasRequiredPermissions")
    """Whether the connected account has the required permissions for this feature."""


class SupportedFeatureDict(TypedDict):
    name: NotRequired[str]
    has_required_permissions: NotRequired[bool]
