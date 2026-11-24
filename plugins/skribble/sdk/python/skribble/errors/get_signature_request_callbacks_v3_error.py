from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem import Problem

GetSignatureRequestCallbacksV3ErrorBody: TypeAlias = Problem | RawError


@dataclass(frozen=True, slots=True)
class _GetSignatureRequestCallbacksV3Error:
    def map(self, status_code: int, content: bytes) -> GetSignatureRequestCallbacksV3ErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 500 | 503:
                return decode_json[Problem](content)
            case _:
                return RawError(status_code, content)


get_signature_request_callbacks_v3_error_mapper: Final[
    ErrorMapper[GetSignatureRequestCallbacksV3ErrorBody]
] = _GetSignatureRequestCallbacksV3Error()
