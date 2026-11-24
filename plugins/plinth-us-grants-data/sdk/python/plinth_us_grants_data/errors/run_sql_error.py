from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_error_model import ApiErrorModel

RunSqlErrorBody: TypeAlias = ApiErrorModel | RawError


@dataclass(frozen=True, slots=True)
class _RunSqlError:
    def map(self, status_code: int, content: bytes) -> RunSqlErrorBody:
        match status_code:
            case 401 | 402:
                return decode_json[ApiErrorModel](content)
            case _:
                return RawError(status_code, content)


run_sql_error_mapper: Final[ErrorMapper[RunSqlErrorBody]] = _RunSqlError()
