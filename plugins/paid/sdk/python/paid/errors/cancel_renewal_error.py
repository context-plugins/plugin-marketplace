from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CancelRenewalErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CancelRenewalError:
    def map(self, status_code: int, content: bytes) -> CancelRenewalErrorBody:
        match status_code:
            case 400 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


cancel_renewal_error_mapper: Final[ErrorMapper[CancelRenewalErrorBody]] = _CancelRenewalError()
