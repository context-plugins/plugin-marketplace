from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

NotifyWhenUploaded2ErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _NotifyWhenUploaded2Error:
    def map(self, status_code: int, content: bytes) -> NotifyWhenUploaded2ErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


notify_when_uploaded2_error_mapper: Final[ErrorMapper[NotifyWhenUploaded2ErrorBody]] = _NotifyWhenUploaded2Error()
