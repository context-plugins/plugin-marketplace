from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

TagQueue2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _TagQueue2Error:
    def map(self, status_code: int, content: bytes) -> TagQueue2ErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


tag_queue2_error_mapper: Final[ErrorMapper[TagQueue2ErrorBody]] = _TagQueue2Error()
