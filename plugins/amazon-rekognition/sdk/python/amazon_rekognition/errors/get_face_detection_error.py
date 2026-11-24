from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetFaceDetectionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetFaceDetectionError:
    def map(self, status_code: int, content: bytes) -> GetFaceDetectionErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_face_detection_error_mapper: Final[ErrorMapper[GetFaceDetectionErrorBody]] = _GetFaceDetectionError()
