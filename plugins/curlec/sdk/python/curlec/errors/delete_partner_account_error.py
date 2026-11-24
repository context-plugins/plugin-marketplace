from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeletePartnerAccountErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeletePartnerAccountError:
    def map(self, status_code: int, content: bytes) -> DeletePartnerAccountErrorBody:
        match status_code:
            case 400 | 401 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_partner_account_error_mapper: Final[ErrorMapper[DeletePartnerAccountErrorBody]] = _DeletePartnerAccountError()
