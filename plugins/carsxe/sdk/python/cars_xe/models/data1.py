from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Data1(SdkBaseModel):
    batch_id: Optional[str] = Field(default=UNSET, alias="batchId")
    status: Optional[str] = UNSET
    total_vins: Optional[int] = Field(default=UNSET, alias="totalVins")
    processed_vins: Optional[int] = Field(default=UNSET, alias="processedVins")
    batch_token: Optional[str] = Field(default=UNSET, alias="batchToken")
    """Opaque batch-scoped credential returned only for x402 submissions. Send it in X-CarsXE-Batch-Token on follow-up
    requests."""


class Data1Dict(TypedDict):
    batch_id: NotRequired[str]
    status: NotRequired[str]
    total_vins: NotRequired[int]
    processed_vins: NotRequired[int]
    batch_token: NotRequired[str]
