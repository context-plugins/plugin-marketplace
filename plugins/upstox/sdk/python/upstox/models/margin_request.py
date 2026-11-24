from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .instrument import Instrument, InstrumentDict


class MarginRequest(SdkBaseModel):
    instruments: list[Instrument]
    """instruments"""


class MarginRequestDict(TypedDict):
    instruments: list[InstrumentDict]
