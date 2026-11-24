from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectModerationLabels2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectModerationLabels2Error:
    def map(self, status_code: int, content: bytes) -> DetectModerationLabels2ErrorBody:
        match status_code:
            case 400 | 402 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_moderation_labels2_error_mapper: Final[
    ErrorMapper[DetectModerationLabels2ErrorBody]
] = _DetectModerationLabels2Error()
