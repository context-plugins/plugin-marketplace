from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreatePersonBulkLookupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreatePersonBulkLookupError:
    def map(self, status_code: int, content: bytes) -> CreatePersonBulkLookupErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_person_bulk_lookup_error_mapper: Final[
    ErrorMapper[CreatePersonBulkLookupErrorBody]
] = _CreatePersonBulkLookupError()
