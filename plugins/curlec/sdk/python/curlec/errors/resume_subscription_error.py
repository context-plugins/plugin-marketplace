from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ResumeSubscriptionErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ResumeSubscriptionError:
    def map(self, status_code: int, content: bytes) -> ResumeSubscriptionErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


resume_subscription_error_mapper: Final[ErrorMapper[ResumeSubscriptionErrorBody]] = _ResumeSubscriptionError()
