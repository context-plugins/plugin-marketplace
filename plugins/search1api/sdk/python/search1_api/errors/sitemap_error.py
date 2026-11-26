from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

SitemapErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _SitemapError:
    def map(self, status_code: int, content: bytes) -> SitemapErrorBody:
        match status_code:
            case 400 | 401 | 402 | 422 | 429 | 500 | 502:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


sitemap_error_mapper: Final[ErrorMapper[SitemapErrorBody]] = _SitemapError()
