from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

X402ScanChallengeErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _X402ScanChallengeError:
    def map(self, status_code: int, content: bytes) -> X402ScanChallengeErrorBody:
        match status_code:
            case 402:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


x402_scan_challenge_error_mapper: Final[ErrorMapper[X402ScanChallengeErrorBody]] = _X402ScanChallengeError()
