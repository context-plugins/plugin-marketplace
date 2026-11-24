from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OracleColumn(SdkBaseModel):
    """Oracle Column."""

    column: Optional[str] = UNSET
    """The column name."""

    nullable: Optional[bool] = UNSET
    """Whether or not the column can accept a null value."""

    ordinal_position: Optional[int] = Field(default=UNSET, alias="ordinalPosition")
    """The ordinal position of the column in the table."""

    primary_key: Optional[bool] = Field(default=UNSET, alias="primaryKey")
    """Whether or not the column represents a primary key."""

    length: Optional[int] = UNSET
    """Column length."""

    precision: Optional[int] = UNSET
    """Column precision."""

    encoding: Optional[str] = UNSET
    """Column encoding."""

    scale: Optional[int] = UNSET
    """Column scale."""

    data_type: Optional[str] = Field(default=UNSET, alias="dataType")
    """The Oracle data type."""


class OracleColumnDict(TypedDict):
    column: NotRequired[str]
    nullable: NotRequired[bool]
    ordinal_position: NotRequired[int]
    primary_key: NotRequired[bool]
    length: NotRequired[int]
    precision: NotRequired[int]
    encoding: NotRequired[str]
    scale: NotRequired[int]
    data_type: NotRequired[str]
