from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .bid_output import BidOutput, BidOutputDict


class ListBidsResponse(SdkBaseModel):
    results: list[BidOutput]


class ListBidsResponseDict(TypedDict):
    results: list[BidOutputDict]
