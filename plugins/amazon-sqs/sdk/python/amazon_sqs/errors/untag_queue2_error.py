from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UntagQueue2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UntagQueue2Error:
    def map(self, status_code: int, content: bytes) -> UntagQueue2ErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


untag_queue2_error_mapper: Final[ErrorMapper[UntagQueue2ErrorBody]] = _UntagQueue2Error()
