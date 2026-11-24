from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class PublicApiSpuConsumptionResponse(SdkBaseModel):
    from_: Optional[RFC3339DateTime] = Field(default=UNSET, alias="from")
    spus_consumed: Optional[int] = Field(default=UNSET, alias="spusConsumed")
    to: Optional[RFC3339DateTime] = UNSET


class PublicApiSpuConsumptionResponseDict(TypedDict):
    from_: NotRequired[RFC3339DateTime]
    spus_consumed: NotRequired[int]
    to: NotRequired[RFC3339DateTime]
