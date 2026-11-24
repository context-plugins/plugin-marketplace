from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ClassificationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ClassificationError:
    def map(self, status_code: int, content: bytes) -> ClassificationErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


classification_error_mapper: Final[ErrorMapper[ClassificationErrorBody]] = _ClassificationError()
