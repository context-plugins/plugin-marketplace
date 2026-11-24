from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DetectModerationLabelsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DetectModerationLabelsError:
    def map(self, status_code: int, content: bytes) -> DetectModerationLabelsErrorBody:
        match status_code:
            case 400 | 402 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


detect_moderation_labels_error_mapper: Final[
    ErrorMapper[DetectModerationLabelsErrorBody]
] = _DetectModerationLabelsError()
