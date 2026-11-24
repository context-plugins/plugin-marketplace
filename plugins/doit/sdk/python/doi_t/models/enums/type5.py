from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type5(str, Enum):
    """Type of the split."""

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


Type5OrStr: TypeAlias = Annotated[Type5 | str, open_enum_validator(Type5)]
