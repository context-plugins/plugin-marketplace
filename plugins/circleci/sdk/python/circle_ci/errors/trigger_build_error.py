from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

TriggerBuildErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _TriggerBuildError:
    def map(self, status_code: int, content: bytes) -> TriggerBuildErrorBody:
        match status_code:
            case 400 | 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


trigger_build_error_mapper: Final[ErrorMapper[TriggerBuildErrorBody]] = _TriggerBuildError()
