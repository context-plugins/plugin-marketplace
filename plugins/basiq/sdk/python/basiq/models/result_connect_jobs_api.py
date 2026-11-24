from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResultConnectJobsApi(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    url: Optional[str] = UNSET
    code: Optional[str] = UNSET
    title: Optional[str] = UNSET
    detail: Optional[str] = UNSET


class ResultConnectJobsApiDict(TypedDict):
    type_: NotRequired[str]
    url: NotRequired[str]
    code: NotRequired[str]
    title: NotRequired[str]
    detail: NotRequired[str]
