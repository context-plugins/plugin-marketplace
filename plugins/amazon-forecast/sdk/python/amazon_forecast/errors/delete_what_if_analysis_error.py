from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DeleteWhatIfAnalysisErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DeleteWhatIfAnalysisError:
    def map(self, status_code: int, content: bytes) -> DeleteWhatIfAnalysisErrorBody:
        match status_code:
            case 400 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


delete_what_if_analysis_error_mapper: Final[ErrorMapper[DeleteWhatIfAnalysisErrorBody]] = _DeleteWhatIfAnalysisError()
