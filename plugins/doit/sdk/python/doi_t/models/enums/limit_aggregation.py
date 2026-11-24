from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class LimitAggregation(str, Enum):
    """Controls how rows excluded by limits are rendered. Applies when any limit type is active (``metricFilter``,
    ``limitByChange``, or a ``group`` entry with a ``limit``). A report may configure at most two of those three limit
    types — not all three. When ``displayValues`` is not ``actuals_only``, this field must be ``none`` (or omitted,
    which defaults to ``none``)."""

    NONE = "none"
    TOP = "top"
    ALL = "all"

    __str__ = str.__str__


LimitAggregationOrStr: TypeAlias = Annotated[LimitAggregation | str, open_enum_validator(LimitAggregation)]
