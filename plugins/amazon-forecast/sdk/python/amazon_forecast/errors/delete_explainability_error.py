from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteExplainabilityErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteExplainabilityError:
    def map(self, status_code: int, content: bytes) -> DeleteExplainabilityErrorBody:
        match status_code:
            case 400 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_explainability_error_mapper: Final[ErrorMapper[DeleteExplainabilityErrorBody]] = _DeleteExplainabilityError()
