from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.operator import OperatorOrStr


class QueryFilter(SdkBaseModel):
    """A single field comparison condition in a query"""

    field_name: str = Field(alias="fieldName")
    """Name of the entity field to filter on"""

    operator: OperatorOrStr
    """Comparison operator for the filter condition"""

    value: Any
    """Value to compare against; type depends on the field type"""


class QueryFilterDict(TypedDict):
    field_name: str
    operator: OperatorOrStr
    value: Any
