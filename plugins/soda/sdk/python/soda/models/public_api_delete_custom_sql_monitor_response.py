from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PublicApiDeleteCustomSqlMonitorResponse(SdkBaseModel):
    message: str


class PublicApiDeleteCustomSqlMonitorResponseDict(TypedDict):
    message: str
