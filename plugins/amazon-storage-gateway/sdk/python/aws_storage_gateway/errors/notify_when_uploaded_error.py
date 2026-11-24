from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

NotifyWhenUploadedErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _NotifyWhenUploadedError:
    def map(self, status_code: int, content: bytes) -> NotifyWhenUploadedErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


notify_when_uploaded_error_mapper: Final[ErrorMapper[NotifyWhenUploadedErrorBody]] = _NotifyWhenUploadedError()
