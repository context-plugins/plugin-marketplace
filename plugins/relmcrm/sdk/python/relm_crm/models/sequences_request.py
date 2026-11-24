from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SequencesRequest(SdkBaseModel):
    enabled: bool


class SequencesRequestDict(TypedDict):
    enabled: bool
