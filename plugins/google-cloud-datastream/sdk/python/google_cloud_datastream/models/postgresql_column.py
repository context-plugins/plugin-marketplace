from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PostgresqlColumn(SdkBaseModel):
    """PostgreSQL Column."""

    data_type: Optional[str] = Field(default=UNSET, alias="dataType")
    """The PostgreSQL data type."""

    column: Optional[str] = UNSET
    """The column name."""

    scale: Optional[int] = UNSET
    """Column scale."""

    ordinal_position: Optional[int] = Field(default=UNSET, alias="ordinalPosition")
    """The ordinal position of the column in the table."""

    precision: Optional[int] = UNSET
    """Column precision."""

    primary_key: Optional[bool] = Field(default=UNSET, alias="primaryKey")
    """Whether or not the column represents a primary key."""

    length: Optional[int] = UNSET
    """Column length."""

    nullable: Optional[bool] = UNSET
    """Whether or not the column can accept a null value."""


class PostgresqlColumnDict(TypedDict):
    data_type: NotRequired[str]
    column: NotRequired[str]
    scale: NotRequired[int]
    ordinal_position: NotRequired[int]
    precision: NotRequired[int]
    primary_key: NotRequired[bool]
    length: NotRequired[int]
    nullable: NotRequired[bool]
