from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_sipaccounts403_error1 import ApiV1Sipaccounts403Error1
from ..models.error import Error

SipaccountsUpdateErrorBody: TypeAlias = ApiV1Sipaccounts403Error1 | Error | RawError


@dataclass(frozen=True, slots=True)
class _SipaccountsUpdateError:
    def map(self, status_code: int, content: bytes) -> SipaccountsUpdateErrorBody:
        match status_code:
            case 403:
                return decode_json[ApiV1Sipaccounts403Error1](content)
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


sipaccounts_update_error_mapper: Final[ErrorMapper[SipaccountsUpdateErrorBody]] = _SipaccountsUpdateError()
