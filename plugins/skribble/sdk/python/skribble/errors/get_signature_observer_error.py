from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem import Problem

GetSignatureObserverErrorBody: TypeAlias = Problem | RawError


@dataclass(frozen=True, slots=True)
class _GetSignatureObserverError:
    def map(self, status_code: int, content: bytes) -> GetSignatureObserverErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500 | 503:
                return decode_json[Problem](content)
            case _:
                return RawError(status_code, content)


get_signature_observer_error_mapper: Final[ErrorMapper[GetSignatureObserverErrorBody]] = _GetSignatureObserverError()
