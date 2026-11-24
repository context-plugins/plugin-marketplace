from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type_relm_crm_pipelines_api import TypeRelmCrmPipelinesApiOrStr


class Stage(SdkBaseModel):
    id: Optional[str] = UNSET
    key: Optional[str] = UNSET
    label: Optional[str] = UNSET
    ordinal: Optional[int] = UNSET
    type_: Optional[TypeRelmCrmPipelinesApiOrStr] = Field(default=UNSET, alias="type")
    """Semantic type; default open."""


class StageDict(TypedDict):
    id: NotRequired[str]
    key: NotRequired[str]
    label: NotRequired[str]
    ordinal: NotRequired[int]
    type_: NotRequired[TypeRelmCrmPipelinesApiOrStr]
