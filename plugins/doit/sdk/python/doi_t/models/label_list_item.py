from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.color import ColorOrStr
from .enums.type_doi_t_labels_api import TypeDoiTLabelsApiOrStr


class LabelListItem(SdkBaseModel):
    """Label metadata."""

    id: str
    """The unique identifier of the label."""

    name: str
    """The name of the label."""

    color: ColorOrStr
    """The color of the label."""

    type_: Optional[TypeDoiTLabelsApiOrStr] = Field(default=UNSET, alias="type")
    """The type of the label (custom or preset)."""

    create_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createTime")
    """The time when the label was created."""

    update_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updateTime")
    """The time when the label was last updated."""


class LabelListItemDict(TypedDict):
    id: str
    name: str
    color: ColorOrStr
    type_: NotRequired[TypeDoiTLabelsApiOrStr]
    create_time: NotRequired[RFC3339DateTime]
    update_time: NotRequired[RFC3339DateTime]
