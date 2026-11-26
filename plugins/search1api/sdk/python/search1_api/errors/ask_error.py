from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

AskErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _AskError:
    def map(self, status_code: int, content: bytes) -> AskErrorBody:
        match status_code:
            case 400 | 401 | 402 | 429 | 500 | 502:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


ask_error_mapper: Final[ErrorMapper[AskErrorBody]] = _AskError()
