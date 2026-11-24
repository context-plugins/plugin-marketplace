from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.not_found1 import NotFound1
from ..models.unauthenticated1 import Unauthenticated1

DownloadProofErrorBody: TypeAlias = Unauthenticated1 | NotFound1 | RawError


@dataclass(frozen=True, slots=True)
class _DownloadProofError:
    def map(self, status_code: int, content: bytes) -> DownloadProofErrorBody:
        match status_code:
            case 401:
                return decode_json[Unauthenticated1](content)
            case 404:
                return decode_json[NotFound1](content)
            case _:
                return RawError(status_code, content)


download_proof_error_mapper: Final[ErrorMapper[DownloadProofErrorBody]] = _DownloadProofError()
