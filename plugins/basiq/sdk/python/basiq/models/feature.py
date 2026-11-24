from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.feature_type import FeatureTypeOrStr


class Feature(SdkBaseModel):
    feature_type: FeatureTypeOrStr = Field(alias="featureType")
    """The type of feature described."""

    additional_value: Optional[str] = Field(default=UNSET, alias="additionalValue")
    """Generic field containing additional information relevant to the featureType specified. Whether mandatory or not
    is dependent on the value of the featureType."""

    additional_info: Optional[str] = Field(default=UNSET, alias="additionalInfo")
    """Display text providing more information on the feature. Mandatory if the feature type is set to OTHER."""

    additional_info_uri: Optional[str] = Field(default=UNSET, alias="additionalInfoUri")
    """Link to a web page with more information on this feature."""

    is_activated: Optional[bool] = Field(default=UNSET, alias="isActivated")
    """true if the feature is already activated and false if the feature is available for activation. Defaults to true
    if absent.
    > Note: this is an additional field appended to the feature object defined in the Product Reference payload."""


class FeatureDict(TypedDict):
    feature_type: FeatureTypeOrStr
    additional_value: NotRequired[str]
    additional_info: NotRequired[str]
    additional_info_uri: NotRequired[str]
    is_activated: NotRequired[bool]
