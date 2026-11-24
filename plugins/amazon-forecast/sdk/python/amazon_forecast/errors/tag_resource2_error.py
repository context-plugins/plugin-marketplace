from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

TagResource2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _TagResource2Error:
    def map(self, status_code: int, content: bytes) -> TagResource2ErrorBody:
        match status_code:
            case 400 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


tag_resource2_error_mapper: Final[ErrorMapper[TagResource2ErrorBody]] = _TagResource2Error()
