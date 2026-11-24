from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SpannerColumn(SdkBaseModel):
    """Spanner column."""

    column: Optional[str] = UNSET
    """Required. The column name."""

    is_primary_key: Optional[bool] = Field(default=UNSET, alias="isPrimaryKey")
    """Optional. Whether or not the column is a primary key."""

    ordinal_position: Optional[str] = Field(default=UNSET, alias="ordinalPosition")
    """Optional. The ordinal position of the column in the table."""

    data_type: Optional[str] = Field(default=UNSET, alias="dataType")
    """Optional. Spanner data type."""


class SpannerColumnDict(TypedDict):
    column: NotRequired[str]
    is_primary_key: NotRequired[bool]
    ordinal_position: NotRequired[str]
    data_type: NotRequired[str]
