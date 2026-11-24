from __future__ import annotations

from typing import Literal

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .data import Data, DataDict
from .usage import Usage, UsageDict


class BatchEnvelope(SdkBaseModel):
    ok: Literal["True"] = "True"
    request_id: str
    data: Data
    usage: Usage


class BatchEnvelopeDict(TypedDict):
    ok: Literal["True"]
    request_id: str
    data: DataDict
    usage: UsageDict
