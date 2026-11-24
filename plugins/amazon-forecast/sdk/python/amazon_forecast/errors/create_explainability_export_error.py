from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateExplainabilityExportErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateExplainabilityExportError:
    def map(self, status_code: int, content: bytes) -> CreateExplainabilityExportErrorBody:
        match status_code:
            case 400 | 403 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_explainability_export_error_mapper: Final[
    ErrorMapper[CreateExplainabilityExportErrorBody]
] = _CreateExplainabilityExportError()
