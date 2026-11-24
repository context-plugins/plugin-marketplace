from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.scope1 import Scope1OrStr


class GoogleAnalyticsAdminV1BetaCustomDimension(SdkBaseModel):
    """A definition for a CustomDimension."""

    disallow_ads_personalization: Optional[bool] = Field(default=UNSET, alias="disallowAdsPersonalization")
    """Optional. If set to true, sets this dimension as NPA and excludes it from ads personalization. This is currently
    only supported by user-scoped custom dimensions."""

    parameter_name: Optional[str] = Field(default=UNSET, alias="parameterName")
    """Required. Immutable. Tagging parameter name for this custom dimension. If this is a user-scoped dimension, then
    this is the user property name. If this is an event-scoped dimension, then this is the event parameter name. If this
    is an item-scoped dimension, then this is the parameter name found in the eCommerce items array. May only contain
    alphanumeric and underscore characters, starting with a letter. Max length of 24 characters for user-scoped
    dimensions, 40 characters for event-scoped dimensions."""

    scope: Optional[Scope1OrStr] = UNSET
    """Required. Immutable. The scope of this dimension."""

    name: Optional[str] = UNSET
    """Identifier. Resource name for this CustomDimension resource. Format:
    properties/{property}/customDimensions/{customDimension}"""

    description: Optional[str] = UNSET
    """Optional. Description for this custom dimension. Max length of 150 characters."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """Required. Display name for this custom dimension as shown in the Analytics UI. Max length of 82 characters,
    alphanumeric plus space and underscore starting with a letter. Legacy system-generated display names may contain
    square brackets, but updates to this field will never permit square brackets."""


class GoogleAnalyticsAdminV1BetaCustomDimensionDict(TypedDict):
    disallow_ads_personalization: NotRequired[bool]
    parameter_name: NotRequired[str]
    scope: NotRequired[Scope1OrStr]
    name: NotRequired[str]
    description: NotRequired[str]
    display_name: NotRequired[str]
