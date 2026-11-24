from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

StartFaceDetectionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _StartFaceDetectionError:
    def map(self, status_code: int, content: bytes) -> StartFaceDetectionErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


start_face_detection_error_mapper: Final[ErrorMapper[StartFaceDetectionErrorBody]] = _StartFaceDetectionError()
