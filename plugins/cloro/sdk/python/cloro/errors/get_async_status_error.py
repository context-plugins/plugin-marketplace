from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.authentication_error import AuthenticationError
from ..models.internal_error import InternalError
from ..models.rate_limit_error import RateLimitError

GetAsyncStatusErrorBody: TypeAlias = AuthenticationError | RateLimitError | InternalError | RawError


@dataclass(frozen=True, slots=True)
class _GetAsyncStatusError:
    def map(self, status_code: int, content: bytes) -> GetAsyncStatusErrorBody:
        match status_code:
            case 401:
                return decode_json[AuthenticationError](content)
            case 429:
                return decode_json[RateLimitError](content)
            case 500:
                return decode_json[InternalError](content)
            case _:
                return RawError(status_code, content)


get_async_status_error_mapper: Final[ErrorMapper[GetAsyncStatusErrorBody]] = _GetAsyncStatusError()
