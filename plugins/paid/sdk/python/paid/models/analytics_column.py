from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class AnalyticsColumn(SdkBaseModel):
    name: str
    type_: str = Field(alias="type")
    """ClickHouse column type"""


class AnalyticsColumnDict(TypedDict):
    name: str
    type_: str
