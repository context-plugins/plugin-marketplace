from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

TagResourceErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _TagResourceError:
    def map(self, status_code: int, content: bytes) -> TagResourceErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


tag_resource_error_mapper: Final[ErrorMapper[TagResourceErrorBody]] = _TagResourceError()
