from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class UpdateStalenessDto(SdkBaseModel):
    snoozed_until: Optional[str] = Field(default=UNSET, alias="snoozedUntil")
    disabled: Optional[bool] = UNSET
    meta_data: Optional[Any] = Field(default=UNSET, alias="metaData")


class UpdateStalenessDtoDict(TypedDict):
    snoozed_until: NotRequired[str]
    disabled: NotRequired[bool]
    meta_data: NotRequired[Any]
