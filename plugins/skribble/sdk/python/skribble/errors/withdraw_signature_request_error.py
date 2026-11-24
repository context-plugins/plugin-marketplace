from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem import Problem

WithdrawSignatureRequestErrorBody: TypeAlias = Problem | RawError


@dataclass(frozen=True, slots=True)
class _WithdrawSignatureRequestError:
    def map(self, status_code: int, content: bytes) -> WithdrawSignatureRequestErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 406 | 429 | 500 | 503:
                return decode_json[Problem](content)
            case _:
                return RawError(status_code, content)


withdraw_signature_request_error_mapper: Final[
    ErrorMapper[WithdrawSignatureRequestErrorBody]
] = _WithdrawSignatureRequestError()
