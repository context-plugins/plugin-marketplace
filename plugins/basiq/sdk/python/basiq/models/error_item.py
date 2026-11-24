from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.type_core_analytics_api import TypeCoreAnalyticsApiOrStr
from .source_core_analytics_api import SourceCoreAnalyticsApi, SourceCoreAnalyticsApiDict


class ErrorItem(SdkBaseModel):
    type_: Optional[TypeCoreAnalyticsApiOrStr] = Field(default=UNSET, alias="type")
    code: Optional[str] = UNSET
    title: Optional[str] = UNSET
    detail: Optional[str] = UNSET
    source: OptionalNullable[SourceCoreAnalyticsApi] = UNSET


class ErrorItemDict(TypedDict):
    type_: NotRequired[TypeCoreAnalyticsApiOrStr]
    code: NotRequired[str]
    title: NotRequired[str]
    detail: NotRequired[str]
    source: NotRequired[SourceCoreAnalyticsApiDict | None]
