from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

DeepcrawlStatusErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _DeepcrawlStatusError:
    def map(self, status_code: int, content: bytes) -> DeepcrawlStatusErrorBody:
        match status_code:
            case 400 | 404 | 500 | 502:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


deepcrawl_status_error_mapper: Final[ErrorMapper[DeepcrawlStatusErrorBody]] = _DeepcrawlStatusError()
