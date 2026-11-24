from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

PostScreenshotBatchErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _PostScreenshotBatchError:
    def map(self, status_code: int, content: bytes) -> PostScreenshotBatchErrorBody:
        match status_code:
            case 400 | 401 | 429:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


post_screenshot_batch_error_mapper: Final[ErrorMapper[PostScreenshotBatchErrorBody]] = _PostScreenshotBatchError()
