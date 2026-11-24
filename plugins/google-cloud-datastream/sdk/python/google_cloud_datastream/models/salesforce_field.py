from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SalesforceField(SdkBaseModel):
    """Salesforce field."""

    data_type: Optional[str] = Field(default=UNSET, alias="dataType")
    """The data type."""

    name: Optional[str] = UNSET
    """The field name."""

    nillable: Optional[bool] = UNSET
    """Indicates whether the field can accept nil values."""


class SalesforceFieldDict(TypedDict):
    data_type: NotRequired[str]
    name: NotRequired[str]
    nillable: NotRequired[bool]
