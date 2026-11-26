from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

CrawlErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _CrawlError:
    def map(self, status_code: int, content: bytes) -> CrawlErrorBody:
        match status_code:
            case 400 | 401 | 402 | 404 | 410 | 422 | 429 | 500 | 502:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


crawl_error_mapper: Final[ErrorMapper[CrawlErrorBody]] = _CrawlError()
