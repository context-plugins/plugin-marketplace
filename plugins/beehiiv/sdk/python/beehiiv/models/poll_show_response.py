from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .poll import Poll, PollDict


class PollShowResponse(SdkBaseModel):
    data: Poll


class PollShowResponseDict(TypedDict):
    data: PollDict
