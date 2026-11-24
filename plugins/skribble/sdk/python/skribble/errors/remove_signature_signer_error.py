from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem import Problem

RemoveSignatureSignerErrorBody: TypeAlias = Problem | RawError


@dataclass(frozen=True, slots=True)
class _RemoveSignatureSignerError:
    def map(self, status_code: int, content: bytes) -> RemoveSignatureSignerErrorBody:
        match status_code:
            case 400 | 401 | 403 | 429 | 500 | 503:
                return decode_json[Problem](content)
            case _:
                return RawError(status_code, content)


remove_signature_signer_error_mapper: Final[ErrorMapper[RemoveSignatureSignerErrorBody]] = _RemoveSignatureSignerError()
