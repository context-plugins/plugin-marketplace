from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProductUnit(SdkBaseModel):
    id: Optional[int] = UNSET
    name: str
    is_share: Optional[bool] = Field(default=UNSET, alias="isShare")
    is_delete: Optional[bool] = Field(default=UNSET, alias="isDelete")


class ProductUnitDict(TypedDict):
    id: NotRequired[int]
    name: str
    is_share: NotRequired[bool]
    is_delete: NotRequired[bool]
