from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FieldBillV3VendorsApi(SdkBaseModel):
    """Properties of a validation field."""

    name: Optional[str] = UNSET
    """Regulatory field name"""

    description: Optional[str] = UNSET
    """Regulatory field value description"""

    regular_expression: Optional[str] = Field(default=UNSET, alias="regularExpression")
    """Regular expression that BILL uses to validate the regulatory field"""

    required: Optional[bool] = UNSET
    """Set as ``true`` if the regulatory field is required"""


class FieldBillV3VendorsApiDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str]
    regular_expression: NotRequired[str]
    required: NotRequired[bool]
