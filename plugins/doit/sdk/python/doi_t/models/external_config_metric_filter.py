from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel
from .enums.operand import Operand, OperandOrStr
from .enums.operator import OperatorOrStr
from .external_metric import ExternalMetric, ExternalMetricDict


class ExternalConfigMetricFilter(SdkBaseModel):
    """Metric filter to limit report rows by metric value. On PATCH, omit to preserve the existing filter; send null to
    remove it."""

    metric: ExternalMetric
    """Metric selector used in reports and filters."""

    operator: OperatorOrStr
    """Comparison operator for filtering metric values: ``gt`` (Greater Than), ``lt`` (Less Than), ``lte`` (Less Than or
    Equals), ``gte`` (Greater Than or Equals), ``b`` (Between), ``nb`` (Not Between), ``e`` (Equals), ``ne`` (Not
    Equals)."""

    values: list[float]
    operand: OperandOrStr = Operand.SINGLE_VALUE
    """Whether the threshold applies to each value (default) or the series total. Same field as the DoiT Console metric
    filter ``operand`` (``OperandSingleValue`` / ``OperandSeriesTotal``). On input, omitted defaults to
    ``single_value``. GET responses echo the effective value (``single_value`` or ``series_total``)."""


class ExternalConfigMetricFilterDict(TypedDict):
    metric: ExternalMetricDict
    operator: OperatorOrStr
    values: list[float]
    operand: NotRequired[OperandOrStr]
