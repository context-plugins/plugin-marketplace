from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .permission import Permission, PermissionDict


class Data(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    retain_data: bool = Field(alias="retainData")
    initial_retrieval_days: Optional[int] = Field(default=UNSET, alias="initialRetrievalDays")
    organisation: OptionalNullable[bool] = UNSET
    permissions: list[Permission]


class DataDict(TypedDict):
    retain_data: bool
    initial_retrieval_days: NotRequired[int]
    organisation: NotRequired[bool | None]
    permissions: list[PermissionDict]
