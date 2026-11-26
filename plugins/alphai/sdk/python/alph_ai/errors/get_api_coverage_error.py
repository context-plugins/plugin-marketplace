from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetApiCoverageErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetApiCoverageError:
    def map(self, status_code: int, content: bytes) -> GetApiCoverageErrorBody:
        match status_code:
            case 401 | 429 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_api_coverage_error_mapper: Final[ErrorMapper[GetApiCoverageErrorBody]] = _GetApiCoverageError()
