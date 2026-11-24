from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_envelope import ErrorEnvelope

AccountErrorBody: TypeAlias = ErrorEnvelope | RawError


@dataclass(frozen=True, slots=True)
class _AccountError:
    def map(self, status_code: int, content: bytes) -> AccountErrorBody:
        match status_code:
            case 401 | 429:
                return decode_json[ErrorEnvelope](content)
            case _:
                return RawError(status_code, content)


account_error_mapper: Final[ErrorMapper[AccountErrorBody]] = _AccountError()
