from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

GetAccountUsageErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _GetAccountUsageError:
    def map(self, status_code: int, content: bytes) -> GetAccountUsageErrorBody:
        match status_code:
            case 401 | 403:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


get_account_usage_error_mapper: Final[ErrorMapper[GetAccountUsageErrorBody]] = _GetAccountUsageError()
