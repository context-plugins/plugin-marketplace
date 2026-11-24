from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dimension_expression2 import DimensionExpression2, DimensionExpression2Dict


class Dimension(SdkBaseModel):
    """Dimensions are attributes of your data. For example, the dimension city indicates the city from which an event
    originates. Dimension values in report responses are strings; for example, the city could be "Paris" or "New York".
    Requests are allowed up to 9 dimensions."""

    dimension_expression: Optional[DimensionExpression2] = Field(default=UNSET, alias="dimensionExpression")
    """One dimension can be the result of an expression of multiple dimensions. For example, dimension "country, city":
    concatenate(country, ", ", city)."""

    name: Optional[str] = UNSET
    """The name of the dimension. See the `API Dimensions
    <https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#dimensions>`__ for the list of
    dimension names supported by core reporting methods such as ``runReport`` and ``batchRunReports``. See `Realtime
    Dimensions <https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-api-schema#dimensions>`__
    for the list of dimension names supported by the ``runRealtimeReport`` method. See `Funnel Dimensions
    <https://developers.google.com/analytics/devguides/reporting/data/v1/exploration-api-schema#dimensions>`__ for the
    list of dimension names supported by the ``runFunnelReport`` method. If ``dimensionExpression`` is specified,
    ``name`` can be any string that you would like within the allowed character set. For example if a
    ``dimensionExpression`` concatenates ``country`` and ``city``, you could call that dimension ``countryAndCity``.
    Dimension names that you choose must match the regular expression ``^[a-zA-Z0-9_]$``. Dimensions are referenced by
    ``name`` in ``dimensionFilter``, ``orderBys``, ``dimensionExpression``, and ``pivots``."""


class DimensionDict(TypedDict):
    dimension_expression: NotRequired[DimensionExpression2Dict]
    name: NotRequired[str]
