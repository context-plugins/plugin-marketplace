from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .v1_beta_audience_dimension_value import V1BetaAudienceDimensionValue, V1BetaAudienceDimensionValueDict


class V1BetaAudienceRow(SdkBaseModel):
    """Dimension value attributes for the audience user row."""

    dimension_values: Optional[list[V1BetaAudienceDimensionValue]] = Field(default=UNSET, alias="dimensionValues")
    """Each dimension value attribute for an audience user. One dimension value will be added for each dimension column
    requested."""


class V1BetaAudienceRowDict(TypedDict):
    dimension_values: NotRequired[list[V1BetaAudienceDimensionValueDict]]
