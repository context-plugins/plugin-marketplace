from __future__ import annotations

from typing import Literal

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .custom_field_filter import CustomFieldFilter, CustomFieldFilterDict
from .enums.custom_fields_logical_operator2 import CustomFieldsLogicalOperator2OrStr


class SegmentSubscriptionInput2(SdkBaseModel):
    type_: Literal["custom_fields"] = Field(default="custom_fields", alias="type")
    """Discriminator value: custom_fields"""

    operator: Optional[CustomFieldsLogicalOperator2OrStr] = UNSET
    """The logical operator used to combine multiple custom field filters. Defaults to ``and`` if not specified."""

    custom_fields: list[CustomFieldFilter]


class SegmentSubscriptionInput2Dict(TypedDict):
    type_: Literal["custom_fields"]
    operator: NotRequired[CustomFieldsLogicalOperator2OrStr]
    custom_fields: list[CustomFieldFilterDict]
