from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaAccessDimensionHeader(SdkBaseModel):
    """Describes a dimension column in the report. Dimensions requested in a report produce column entries within rows
    and DimensionHeaders. However, dimensions used exclusively within filters or expressions do not produce columns in a
    report; correspondingly, those dimensions do not produce headers."""

    dimension_name: Optional[str] = Field(default=UNSET, alias="dimensionName")
    """The dimension's name; for example 'userEmail'."""


class GoogleAnalyticsAdminV1BetaAccessDimensionHeaderDict(TypedDict):
    dimension_name: NotRequired[str]
