from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

TestStateErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _TestStateError:
    def map(self, status_code: int, content: bytes) -> TestStateErrorBody:
        match status_code:
            case 400:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


test_state_error_mapper: Final[ErrorMapper[TestStateErrorBody]] = _TestStateError()
