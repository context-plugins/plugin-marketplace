from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.method import MethodOrStr
from .enums.object_relm_crm_batch_api import ObjectRelmCrmBatchApiOrStr


class Operation(SdkBaseModel):
    object_: Optional[ObjectRelmCrmBatchApiOrStr] = Field(default=UNSET, alias="object")
    method: Optional[MethodOrStr] = UNSET
    data: Optional[Any] = UNSET
    patch: Optional[Any] = UNSET
    id: Optional[str] = UNSET


class OperationDict(TypedDict):
    object_: NotRequired[ObjectRelmCrmBatchApiOrStr]
    method: NotRequired[MethodOrStr]
    data: NotRequired[Any]
    patch: NotRequired[Any]
    id: NotRequired[str]
