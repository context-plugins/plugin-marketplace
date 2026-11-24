from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateKeyResultErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateKeyResultError:
    def map(self, status_code: int, content: bytes) -> UpdateKeyResultErrorBody:
        match status_code:
            case 400 | 404 | 422:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_key_result_error_mapper: Final[ErrorMapper[UpdateKeyResultErrorBody]] = _UpdateKeyResultError()
