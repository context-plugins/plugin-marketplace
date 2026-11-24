from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateUniversalPersonSearchErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateUniversalPersonSearchError:
    def map(self, status_code: int, content: bytes) -> CreateUniversalPersonSearchErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_universal_person_search_error_mapper: Final[
    ErrorMapper[CreateUniversalPersonSearchErrorBody]
] = _CreateUniversalPersonSearchError()
