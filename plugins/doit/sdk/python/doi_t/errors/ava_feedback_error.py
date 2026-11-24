from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

AvaFeedbackErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _AvaFeedbackError:
    def map(self, status_code: int, content: bytes) -> AvaFeedbackErrorBody:
        match status_code:
            case 400 | 401 | 403 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


ava_feedback_error_mapper: Final[ErrorMapper[AvaFeedbackErrorBody]] = _AvaFeedbackError()
