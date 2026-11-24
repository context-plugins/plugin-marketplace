from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.object_relm_crm_pipelines_api import ObjectRelmCrmPipelinesApiOrStr
from .stage import Stage, StageDict


class Pipeline(SdkBaseModel):
    id: Optional[str] = UNSET
    object_: Optional[ObjectRelmCrmPipelinesApiOrStr] = Field(default=UNSET, alias="object")
    key: Optional[str] = UNSET
    name: Optional[str] = UNSET
    is_default: Optional[bool] = UNSET
    stages: Optional[list[Stage]] = UNSET


class PipelineDict(TypedDict):
    id: NotRequired[str]
    object_: NotRequired[ObjectRelmCrmPipelinesApiOrStr]
    key: NotRequired[str]
    name: NotRequired[str]
    is_default: NotRequired[bool]
    stages: NotRequired[list[StageDict]]
