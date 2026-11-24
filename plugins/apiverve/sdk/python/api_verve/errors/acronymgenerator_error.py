from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

AcronymgeneratorErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _AcronymgeneratorError:
    def map(self, status_code: int, content: bytes) -> AcronymgeneratorErrorBody:
        match status_code:
            case 401 | 404 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


acronymgenerator_error_mapper: Final[ErrorMapper[AcronymgeneratorErrorBody]] = _AcronymgeneratorError()
