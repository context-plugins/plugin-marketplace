from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .filter2 import Filter2, Filter2Dict
from .filter_expression1 import FilterExpression1, FilterExpression1Dict
from .filter_expression_list1 import FilterExpressionList1, FilterExpressionList1Dict
from .filter_expression_list2 import FilterExpressionList2, FilterExpressionList2Dict


class FilterExpression2(SdkBaseModel):
    """The filter clause of metrics. Applied at post aggregation phase, similar to SQL having-clause. Metrics must be
    requested to be used in this filter. Dimensions cannot be used in this filter."""

    or_group: Optional[FilterExpressionList1] = Field(default=UNSET, alias="orGroup")
    """The FilterExpressions in or_group have an OR relationship."""

    not_expression: Optional[FilterExpression1] = Field(default=UNSET, alias="notExpression")
    """The FilterExpression is NOT of not_expression."""

    filter: Optional[Filter2] = UNSET
    """A primitive filter. In the same FilterExpression, all of the filter's field names need to be either all
    dimensions or all metrics."""

    and_group: Optional[FilterExpressionList2] = Field(default=UNSET, alias="andGroup")
    """The FilterExpressions in and_group have an AND relationship."""


class FilterExpression2Dict(TypedDict):
    or_group: NotRequired[FilterExpressionList1Dict]
    not_expression: NotRequired[FilterExpression1Dict]
    filter: NotRequired[Filter2Dict]
    and_group: NotRequired[FilterExpressionList2Dict]
