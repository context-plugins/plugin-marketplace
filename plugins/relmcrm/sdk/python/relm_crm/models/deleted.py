from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Deleted(SdkBaseModel):
    id: Optional[str] = UNSET
    object_: Optional[str] = Field(default=UNSET, alias="object")
    deleted: Optional[bool] = UNSET


class DeletedDict(TypedDict):
    id: NotRequired[str]
    object_: NotRequired[str]
    deleted: NotRequired[bool]
