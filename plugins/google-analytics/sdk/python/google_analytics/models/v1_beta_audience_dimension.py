from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1BetaAudienceDimension(SdkBaseModel):
    """An audience dimension is a user attribute. Specific user attributed are requested and then later returned in the
    ``QueryAudienceExportResponse``."""

    dimension_name: Optional[str] = Field(default=UNSET, alias="dimensionName")
    """Optional. The API name of the dimension. See the `API Dimensions
    <https://developers.google.com/analytics/devguides/reporting/data/v1/audience-list-api-schema#dimensions>`__ for the
    list of dimension names."""


class V1BetaAudienceDimensionDict(TypedDict):
    dimension_name: NotRequired[str]
