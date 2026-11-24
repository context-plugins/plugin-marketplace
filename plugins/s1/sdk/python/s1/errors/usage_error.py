from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

UsageErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _UsageError:
    def map(self, status_code: int, content: bytes) -> UsageErrorBody:
        match status_code:
            case 400 | 401 | 429 | 500:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


usage_error_mapper: Final[ErrorMapper[UsageErrorBody]] = _UsageError()
