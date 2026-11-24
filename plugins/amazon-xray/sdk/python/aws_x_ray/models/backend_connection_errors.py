from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class BackendConnectionErrors(SdkBaseModel):
    timeout_count: Optional[int] = Field(default=UNSET, alias="TimeoutCount")
    connection_refused_count: Optional[int] = Field(default=UNSET, alias="ConnectionRefusedCount")
    http_code4_xx_count: Optional[int] = Field(default=UNSET, alias="HTTPCode4XXCount")
    http_code5_xx_count: Optional[int] = Field(default=UNSET, alias="HTTPCode5XXCount")
    unknown_host_count: Optional[int] = Field(default=UNSET, alias="UnknownHostCount")
    other_count: Optional[int] = Field(default=UNSET, alias="OtherCount")


class BackendConnectionErrorsDict(TypedDict):
    timeout_count: NotRequired[int]
    connection_refused_count: NotRequired[int]
    http_code4_xx_count: NotRequired[int]
    http_code5_xx_count: NotRequired[int]
    unknown_host_count: NotRequired[int]
    other_count: NotRequired[int]
