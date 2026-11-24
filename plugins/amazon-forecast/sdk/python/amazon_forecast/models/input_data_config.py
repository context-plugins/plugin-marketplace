from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .supplementary_feature import SupplementaryFeature, SupplementaryFeatureDict


class InputDataConfig(SdkBaseModel):
    dataset_group_arn: str = Field(alias="DatasetGroupArn")
    """The Amazon Resource Name (ARN) of the dataset group."""

    supplementary_features: Optional[list[SupplementaryFeature]] = Field(default=UNSET, alias="SupplementaryFeatures")
    """An array of supplementary features. The only supported feature is a holiday calendar."""


class InputDataConfigDict(TypedDict):
    dataset_group_arn: str
    supplementary_features: NotRequired[list[SupplementaryFeatureDict]]
