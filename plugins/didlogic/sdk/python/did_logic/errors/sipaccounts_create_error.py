from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.unions.api_v1_sipaccounts_response11 import ApiV1SipaccountsResponse11

SipaccountsCreateErrorBody: TypeAlias = ApiV1SipaccountsResponse11 | RawError


@dataclass(frozen=True, slots=True)
class _SipaccountsCreateError:
    def map(self, status_code: int, content: bytes) -> SipaccountsCreateErrorBody:
        match status_code:
            case 403:
                return decode_json[ApiV1SipaccountsResponse11](content)
            case _:
                return RawError(status_code, content)


sipaccounts_create_error_mapper: Final[ErrorMapper[SipaccountsCreateErrorBody]] = _SipaccountsCreateError()
