from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

CodeGenerationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _CodeGenerationError:
    def map(self, status_code: int, content: bytes) -> CodeGenerationErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


code_generation_error_mapper: Final[ErrorMapper[CodeGenerationErrorBody]] = _CodeGenerationError()
