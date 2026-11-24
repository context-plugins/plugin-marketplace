from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeLanguageModelErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeLanguageModelError:
    def map(self, status_code: int, content: bytes) -> DescribeLanguageModelErrorBody:
        match status_code:
            case 400 | 404 | 429 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_language_model_error_mapper: Final[ErrorMapper[DescribeLanguageModelErrorBody]] = _DescribeLanguageModelError()
