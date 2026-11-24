from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .featurization_method import FeaturizationMethod, FeaturizationMethodDict


class Featurization(SdkBaseModel):
    attribute_name: str = Field(alias="AttributeName")
    """The name of the schema attribute that specifies the data field to be featurized. Amazon Forecast supports the
    target field of the TARGET_TIME_SERIES and the RELATED_TIME_SERIES datasets. For example, for the RETAIL domain, the
    target is demand, and for the CUSTOM domain, the target is target_value. For more information, see
    howitworks-missing-values."""

    featurization_pipeline: Optional[list[FeaturizationMethod]] = Field(default=UNSET, alias="FeaturizationPipeline")
    """An array of one FeaturizationMethod object that specifies the feature transformation method."""


class FeaturizationDict(TypedDict):
    attribute_name: str
    featurization_pipeline: NotRequired[list[FeaturizationMethodDict]]
