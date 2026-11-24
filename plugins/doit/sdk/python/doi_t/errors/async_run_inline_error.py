from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

AsyncRunInlineErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _AsyncRunInlineError:
    def map(self, status_code: int, content: bytes) -> AsyncRunInlineErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


async_run_inline_error_mapper: Final[ErrorMapper[AsyncRunInlineErrorBody]] = _AsyncRunInlineError()
