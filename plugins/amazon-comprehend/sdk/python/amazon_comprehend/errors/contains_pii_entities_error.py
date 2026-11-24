from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ContainsPiiEntitiesErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ContainsPiiEntitiesError:
    def map(self, status_code: int, content: bytes) -> ContainsPiiEntitiesErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


contains_pii_entities_error_mapper: Final[ErrorMapper[ContainsPiiEntitiesErrorBody]] = _ContainsPiiEntitiesError()
