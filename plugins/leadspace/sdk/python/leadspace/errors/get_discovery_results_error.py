from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetDiscoveryResultsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetDiscoveryResultsError:
    def map(self, status_code: int, content: bytes) -> GetDiscoveryResultsErrorBody:
        match status_code:
            case 401 | 404:
                return RawError(status_code, content)
            case 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_discovery_results_error_mapper: Final[ErrorMapper[GetDiscoveryResultsErrorBody]] = _GetDiscoveryResultsError()
