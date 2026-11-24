from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

FraudSignalErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _FraudSignalError:
    def map(self, status_code: int, content: bytes) -> FraudSignalErrorBody:
        match status_code:
            case 402:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


fraud_signal_error_mapper: Final[ErrorMapper[FraudSignalErrorBody]] = _FraudSignalError()
