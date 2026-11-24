from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

FetchAllDisputesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _FetchAllDisputesError:
    def map(self, status_code: int, content: bytes) -> FetchAllDisputesErrorBody:
        match status_code:
            case 401 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


fetch_all_disputes_error_mapper: Final[ErrorMapper[FetchAllDisputesErrorBody]] = _FetchAllDisputesError()
