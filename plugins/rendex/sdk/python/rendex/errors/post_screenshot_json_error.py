from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

PostScreenshotJsonErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _PostScreenshotJsonError:
    def map(self, status_code: int, content: bytes) -> PostScreenshotJsonErrorBody:
        match status_code:
            case 400 | 401 | 408 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


post_screenshot_json_error_mapper: Final[ErrorMapper[PostScreenshotJsonErrorBody]] = _PostScreenshotJsonError()
