from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DimensionsTypes(str, Enum):
    """Dimension filter type. Always pair ``type`` with ``id`` on scope filters. Discover valid ``id`` + ``type`` pairs
    for your account with ``GET /analytics/v1/dimensions``. ``allocation_rule`` replaces ``attribution``; ``allocation``
    replaces ``attribution_group``."""

    DATETIME = "datetime"
    FIXED = "fixed"
    OPTIONAL = "optional"
    LABEL = "label"
    TAG = "tag"
    PROJECT_LABEL = "project_label"
    SYSTEM_LABEL = "system_label"
    ATTRIBUTION = "attribution"
    ATTRIBUTION_GROUP = "attribution_group"
    ALLOCATION = "allocation"
    ALLOCATION_RULE = "allocation_rule"
    GKE = "gke"
    GKE_LABEL = "gke_label"

    __str__ = str.__str__


DimensionsTypesOrStr: TypeAlias = Annotated[DimensionsTypes | str, open_enum_validator(DimensionsTypes)]
