from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .unions.data_transcriptfetch_system_api import DataTranscriptfetchSystemApi, DataTranscriptfetchSystemApiDict
from .usage import Usage, UsageDict


class SuccessEnvelope(SdkBaseModel):
    ok: Literal["True"] = "True"
    request_id: str
    data: DataTranscriptfetchSystemApi
    usage: Usage


class SuccessEnvelopeDict(TypedDict):
    ok: Literal["True"]
    request_id: str
    data: DataTranscriptfetchSystemApiDict
    usage: UsageDict
