from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UntagResourceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UntagResourceError:
    def map(self, status_code: int, content: bytes) -> UntagResourceErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


untag_resource_error_mapper: Final[ErrorMapper[UntagResourceErrorBody]] = _UntagResourceError()
