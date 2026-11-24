from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaAccessDimension(SdkBaseModel):
    """Dimensions are attributes of your data. For example, the dimension ``userEmail`` indicates the email of the user
    that accessed reporting data. Dimension values in report responses are strings."""

    dimension_name: Optional[str] = Field(default=UNSET, alias="dimensionName")
    """The API name of the dimension. See `Data Access Schema
    <https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema>`__ for the list of dimensions
    supported in this API. Dimensions are referenced by name in ``dimensionFilter`` and ``orderBys``."""


class GoogleAnalyticsAdminV1BetaAccessDimensionDict(TypedDict):
    dimension_name: NotRequired[str]
