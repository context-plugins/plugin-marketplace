from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .exchange_detail import ExchangeDetail, ExchangeDetailDict


class ApiV1ExchangesResponse1(SdkBaseModel):
    exchange: ExchangeDetail


class ApiV1ExchangesResponse1Dict(TypedDict):
    exchange: ExchangeDetailDict
