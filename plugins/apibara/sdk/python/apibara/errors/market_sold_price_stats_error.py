from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

MarketSoldPriceStatsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _MarketSoldPriceStatsError:
    def map(self, status_code: int, content: bytes) -> MarketSoldPriceStatsErrorBody:
        match status_code:
            case 401 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


market_sold_price_stats_error_mapper: Final[ErrorMapper[MarketSoldPriceStatsErrorBody]] = _MarketSoldPriceStatsError()
