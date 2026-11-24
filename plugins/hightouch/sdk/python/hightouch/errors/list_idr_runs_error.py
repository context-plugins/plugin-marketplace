from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.validate_error_json import ValidateErrorJson

ListIdrRunsErrorBody: TypeAlias = ValidateErrorJson | RawError


@dataclass(frozen=True, slots=True)
class _ListIdrRunsError:
    def map(self, status_code: int, content: bytes) -> ListIdrRunsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return RawError(status_code, content)
            case 422:
                return decode_json[ValidateErrorJson](content)
            case _:
                return RawError(status_code, content)


list_idr_runs_error_mapper: Final[ErrorMapper[ListIdrRunsErrorBody]] = _ListIdrRunsError()
