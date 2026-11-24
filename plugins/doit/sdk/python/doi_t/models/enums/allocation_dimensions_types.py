from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AllocationDimensionsTypes(str, Enum):
    """Dimension filter type for allocation rule components. See ``DimensionsTypes`` for per-value meanings. Allocation
    components do not support ``allocation``, ``attribution``, or ``attribution_group`` types."""

    DATETIME = "datetime"
    FIXED = "fixed"
    OPTIONAL = "optional"
    LABEL = "label"
    TAG = "tag"
    PROJECT_LABEL = "project_label"
    SYSTEM_LABEL = "system_label"
    ALLOCATION_RULE = "allocation_rule"
    GKE = "gke"
    GKE_LABEL = "gke_label"

    __str__ = str.__str__


AllocationDimensionsTypesOrStr: TypeAlias = Annotated[
    AllocationDimensionsTypes | str, open_enum_validator(AllocationDimensionsTypes)
]
