from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CloudflowBundleTableField(SdkBaseModel):
    name: str
    data_type: str = Field(alias="dataType")
    is_unique: Optional[bool] = Field(default=UNSET, alias="isUnique")
    description: Optional[str] = UNSET


class CloudflowBundleTableFieldDict(TypedDict):
    name: str
    data_type: str
    is_unique: NotRequired[bool]
    description: NotRequired[str]
