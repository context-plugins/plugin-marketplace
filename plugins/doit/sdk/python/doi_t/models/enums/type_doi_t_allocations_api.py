from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeDoiTAllocationsApi(str, Enum):
    """The dimension type to read the value from. Label-map types (label, tag, project_label, system_label, gke_label)
    extract the value of the given key; "fixed" extracts a raw table dimension (for example project_id,
    service_description, region). Derived dimensions such as credits are not extractable."""

    LABEL = "label"
    TAG = "tag"
    PROJECT_LABEL = "project_label"
    SYSTEM_LABEL = "system_label"
    GKE_LABEL = "gke_label"
    FIXED = "fixed"

    __str__ = str.__str__


TypeDoiTAllocationsApiOrStr: TypeAlias = Annotated[
    TypeDoiTAllocationsApi | str, open_enum_validator(TypeDoiTAllocationsApi)
]
