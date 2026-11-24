from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Data2(SdkBaseModel):
    batch_id: Optional[str] = Field(default=UNSET, alias="batchId")
    numeric_batch_id: Optional[int] = Field(default=UNSET, alias="numericBatchId")
    status: Optional[str] = UNSET
    total_vins: Optional[int] = Field(default=UNSET, alias="totalVins")


class Data2Dict(TypedDict):
    batch_id: NotRequired[str]
    numeric_batch_id: NotRequired[int]
    status: NotRequired[str]
    total_vins: NotRequired[int]
