from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.cell_status import CellStatusOrStr


class EntityColumnValue(SdkBaseModel):
    """One column's value on a single row, as returned by Get Entities. This shape is a passthrough from the underlying
    Workspace service — the fields shown here (``id``, ``name``, ``type``, ``sourceType``, ``value``, ``status``) are
    representative, not an exhaustive schema."""

    id: Optional[str] = UNSET
    name: Optional[str] = UNSET
    type_: Optional[str] = Field(default=UNSET, alias="type")
    source_type: Optional[str] = Field(default=UNSET, alias="sourceType")
    value: Optional[Any] = UNSET
    """The cell's data. Shape depends on the column type."""

    status: Optional[CellStatusOrStr] = UNSET
    """Current state of a single cell's data. ``no_data`` means the run succeeded but found nothing — distinct from
    ``failed``, which means the run itself errored."""


class EntityColumnValueDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    type_: NotRequired[str]
    source_type: NotRequired[str]
    value: NotRequired[Any]
    status: NotRequired[CellStatusOrStr]
