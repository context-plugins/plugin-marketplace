from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .exchange_rate_list_response_dto import ExchangeRateListResponseDto, ExchangeRateListResponseDtoDict


class ExchangeRatesResponseDto(SdkBaseModel):
    """DTO for exchange rates response."""

    exchange_rate_batch_id: Optional[int] = Field(default=UNSET, alias="exchangeRateBatchId")
    exchange_rates: Optional[list[ExchangeRateListResponseDto]] = Field(default=UNSET, alias="exchangeRates")


class ExchangeRatesResponseDtoDict(TypedDict):
    exchange_rate_batch_id: NotRequired[int]
    exchange_rates: NotRequired[list[ExchangeRateListResponseDtoDict]]
