from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CreateWhatIfAnalysisErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CreateWhatIfAnalysisError:
    def map(self, status_code: int, content: bytes) -> CreateWhatIfAnalysisErrorBody:
        match status_code:
            case 400 | 403 | 404 | 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


create_what_if_analysis_error_mapper: Final[ErrorMapper[CreateWhatIfAnalysisErrorBody]] = _CreateWhatIfAnalysisError()
