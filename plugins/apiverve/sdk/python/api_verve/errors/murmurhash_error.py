from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

MurmurhashErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _MurmurhashError:
    def map(self, status_code: int, content: bytes) -> MurmurhashErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


murmurhash_error_mapper: Final[ErrorMapper[MurmurhashErrorBody]] = _MurmurhashError()
