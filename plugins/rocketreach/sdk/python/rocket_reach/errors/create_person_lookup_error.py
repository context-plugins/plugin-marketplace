from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreatePersonLookupErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreatePersonLookupError:
    def map(self, status_code: int, content: bytes) -> CreatePersonLookupErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_person_lookup_error_mapper: Final[ErrorMapper[CreatePersonLookupErrorBody]] = _CreatePersonLookupError()
