from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type4DoiTReportsApi(str, Enum):
    """Type of the target. If split type is "attribution_group", then target type must be "attribution". Otherwise split
    types and target types must be the same."""

    DATETIME = "datetime"
    FIXED = "fixed"
    OPTIONAL = "optional"
    LABEL = "label"
    TAG = "tag"
    PROJECT_LABEL = "project_label"
    SYSTEM_LABEL = "system_label"
    ATTRIBUTION = "attribution"
    ATTRIBUTION_GROUP = "attribution_group"
    GKE = "gke"
    GKE_LABEL = "gke_label"

    __str__ = str.__str__


Type4DoiTReportsApiOrStr: TypeAlias = Annotated[Type4DoiTReportsApi | str, open_enum_validator(Type4DoiTReportsApi)]
