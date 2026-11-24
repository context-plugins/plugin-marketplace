from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem import Problem

ListSignatureObserversErrorBody: TypeAlias = Problem | RawError


@dataclass(frozen=True, slots=True)
class _ListSignatureObserversError:
    def map(self, status_code: int, content: bytes) -> ListSignatureObserversErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500 | 503:
                return decode_json[Problem](content)
            case _:
                return RawError(status_code, content)


list_signature_observers_error_mapper: Final[
    ErrorMapper[ListSignatureObserversErrorBody]
] = _ListSignatureObserversError()
