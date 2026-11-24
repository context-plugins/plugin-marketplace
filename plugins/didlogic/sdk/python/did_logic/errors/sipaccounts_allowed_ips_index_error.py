from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_sipaccounts_allowed_ips403_error1 import ApiV1SipaccountsAllowedIps403Error1
from ..models.error import Error

SipaccountsAllowedIpsIndexErrorBody: TypeAlias = ApiV1SipaccountsAllowedIps403Error1 | Error | RawError


@dataclass(frozen=True, slots=True)
class _SipaccountsAllowedIpsIndexError:
    def map(self, status_code: int, content: bytes) -> SipaccountsAllowedIpsIndexErrorBody:
        match status_code:
            case 403:
                return decode_json[ApiV1SipaccountsAllowedIps403Error1](content)
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


sipaccounts_allowed_ips_index_error_mapper: Final[
    ErrorMapper[SipaccountsAllowedIpsIndexErrorBody]
] = _SipaccountsAllowedIpsIndexError()
