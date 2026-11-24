from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteExplainabilityExportErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteExplainabilityExportError:
    def map(self, status_code: int, content: bytes) -> DeleteExplainabilityExportErrorBody:
        match status_code:
            case 400 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_explainability_export_error_mapper: Final[
    ErrorMapper[DeleteExplainabilityExportErrorBody]
] = _DeleteExplainabilityExportError()
