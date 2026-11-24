from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CheckPersonLookupStatusErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CheckPersonLookupStatusError:
    def map(self, status_code: int, content: bytes) -> CheckPersonLookupStatusErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


check_person_lookup_status_error_mapper: Final[
    ErrorMapper[CheckPersonLookupStatusErrorBody]
] = _CheckPersonLookupStatusError()
