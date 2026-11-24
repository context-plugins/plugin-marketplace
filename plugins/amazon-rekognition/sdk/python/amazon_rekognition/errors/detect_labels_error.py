from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectLabelsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectLabelsError:
    def map(self, status_code: int, content: bytes) -> DetectLabelsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_labels_error_mapper: Final[ErrorMapper[DetectLabelsErrorBody]] = _DetectLabelsError()
