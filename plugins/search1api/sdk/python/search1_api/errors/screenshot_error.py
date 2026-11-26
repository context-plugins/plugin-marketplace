from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

ScreenshotErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _ScreenshotError:
    def map(self, status_code: int, content: bytes) -> ScreenshotErrorBody:
        match status_code:
            case 400 | 401 | 402 | 403 | 422 | 429 | 500 | 502 | 503 | 504:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


screenshot_error_mapper: Final[ErrorMapper[ScreenshotErrorBody]] = _ScreenshotError()
