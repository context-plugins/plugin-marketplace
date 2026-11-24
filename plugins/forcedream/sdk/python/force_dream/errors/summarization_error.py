from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

SummarizationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _SummarizationError:
    def map(self, status_code: int, content: bytes) -> SummarizationErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


summarization_error_mapper: Final[ErrorMapper[SummarizationErrorBody]] = _SummarizationError()
