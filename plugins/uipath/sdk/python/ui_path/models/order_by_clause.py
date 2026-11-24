from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class OrderByClause(SdkBaseModel):
    """Sort specification for query results"""

    field_name: str = Field(alias="fieldName")
    """Name of the field to sort by"""

    descending: bool = False
    """Whether to sort in descending order"""


class OrderByClauseDict(TypedDict):
    field_name: str
    descending: NotRequired[bool]
