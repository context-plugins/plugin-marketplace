from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetLabelDetectionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetLabelDetectionError:
    def map(self, status_code: int, content: bytes) -> GetLabelDetectionErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_label_detection_error_mapper: Final[ErrorMapper[GetLabelDetectionErrorBody]] = _GetLabelDetectionError()
