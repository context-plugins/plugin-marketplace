from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SqlServerColumn(SdkBaseModel):
    """SQLServer Column."""

    column: Optional[str] = UNSET
    """The column name."""

    primary_key: Optional[bool] = Field(default=UNSET, alias="primaryKey")
    """Whether or not the column represents a primary key."""

    nullable: Optional[bool] = UNSET
    """Whether or not the column can accept a null value."""

    precision: Optional[int] = UNSET
    """Column precision."""

    scale: Optional[int] = UNSET
    """Column scale."""

    data_type: Optional[str] = Field(default=UNSET, alias="dataType")
    """The SQLServer data type."""

    length: Optional[int] = UNSET
    """Column length."""

    ordinal_position: Optional[int] = Field(default=UNSET, alias="ordinalPosition")
    """The ordinal position of the column in the table."""


class SqlServerColumnDict(TypedDict):
    column: NotRequired[str]
    primary_key: NotRequired[bool]
    nullable: NotRequired[bool]
    precision: NotRequired[int]
    scale: NotRequired[int]
    data_type: NotRequired[str]
    length: NotRequired[int]
    ordinal_position: NotRequired[int]
