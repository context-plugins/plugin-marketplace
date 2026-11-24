from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem import Problem

CreateSignatureRequestErrorBody: TypeAlias = Problem | RawError


@dataclass(frozen=True, slots=True)
class _CreateSignatureRequestError:
    def map(self, status_code: int, content: bytes) -> CreateSignatureRequestErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 500 | 503:
                return decode_json[Problem](content)
            case _:
                return RawError(status_code, content)


create_signature_request_error_mapper: Final[
    ErrorMapper[CreateSignatureRequestErrorBody]
] = _CreateSignatureRequestError()
