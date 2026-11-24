from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.unauthenticated1 import Unauthenticated1

ListSignRequestsErrorBody: TypeAlias = Unauthenticated1 | RawError


@dataclass(frozen=True, slots=True)
class _ListSignRequestsError:
    def map(self, status_code: int, content: bytes) -> ListSignRequestsErrorBody:
        match status_code:
            case 401:
                return decode_json[Unauthenticated1](content)
            case _:
                return RawError(status_code, content)


list_sign_requests_error_mapper: Final[ErrorMapper[ListSignRequestsErrorBody]] = _ListSignRequestsError()
