from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectCustomLabelsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectCustomLabelsError:
    def map(self, status_code: int, content: bytes) -> DetectCustomLabelsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_custom_labels_error_mapper: Final[ErrorMapper[DetectCustomLabelsErrorBody]] = _DetectCustomLabelsError()
