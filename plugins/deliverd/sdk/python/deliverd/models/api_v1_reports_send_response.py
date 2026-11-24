from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .sent import Sent, SentDict


class ApiV1ReportsSendResponse(SdkBaseModel):
    sent: list[Sent]
    already_had_access: list[str] = Field(alias="alreadyHadAccess")
    """Recipients who could already open it; emailed again anyway"""


class ApiV1ReportsSendResponseDict(TypedDict):
    sent: list[SentDict]
    already_had_access: list[str]
