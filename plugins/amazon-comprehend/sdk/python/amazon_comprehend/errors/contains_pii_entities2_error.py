from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ContainsPiiEntities2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ContainsPiiEntities2Error:
    def map(self, status_code: int, content: bytes) -> ContainsPiiEntities2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


contains_pii_entities2_error_mapper: Final[ErrorMapper[ContainsPiiEntities2ErrorBody]] = _ContainsPiiEntities2Error()
