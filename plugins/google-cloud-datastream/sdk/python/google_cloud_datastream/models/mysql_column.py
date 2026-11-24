from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MysqlColumn(SdkBaseModel):
    """MySQL Column."""

    data_type: Optional[str] = Field(default=UNSET, alias="dataType")
    """The MySQL data type. Full data types list can be found here:
    https://dev.mysql.com/doc/refman/8.0/en/data-types.html"""

    precision: Optional[int] = UNSET
    """Column precision."""

    primary_key: Optional[bool] = Field(default=UNSET, alias="primaryKey")
    """Whether or not the column represents a primary key."""

    ordinal_position: Optional[int] = Field(default=UNSET, alias="ordinalPosition")
    """The ordinal position of the column in the table."""

    column: Optional[str] = UNSET
    """The column name."""

    collation: Optional[str] = UNSET
    """Column collation."""

    scale: Optional[int] = UNSET
    """Column scale."""

    length: Optional[int] = UNSET
    """Column length."""

    nullable: Optional[bool] = UNSET
    """Whether or not the column can accept a null value."""


class MysqlColumnDict(TypedDict):
    data_type: NotRequired[str]
    precision: NotRequired[int]
    primary_key: NotRequired[bool]
    ordinal_position: NotRequired[int]
    column: NotRequired[str]
    collation: NotRequired[str]
    scale: NotRequired[int]
    length: NotRequired[int]
    nullable: NotRequired[bool]
