from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.predicate_operator import PredicateOperatorOrInt


class FilterOptions(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    column_name: OptionalNullable[str] = Field(default=UNSET, alias="columnName")
    column_value: OptionalNullable[str] = Field(default=UNSET, alias="columnValue")
    column_predicate_operator: Optional[PredicateOperatorOrInt] = Field(default=UNSET, alias="columnPredicateOperator")
    """0 = Or 1 = And"""


class FilterOptionsDict(TypedDict):
    column_name: NotRequired[str | None]
    column_value: NotRequired[str | None]
    column_predicate_operator: NotRequired[PredicateOperatorOrInt]
