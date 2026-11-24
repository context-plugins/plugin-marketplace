from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.merchant_not_found_error import MerchantNotFoundError

GetMerchantByIdErrorBody: TypeAlias = MerchantNotFoundError | RawError


@dataclass(frozen=True, slots=True)
class _GetMerchantByIdError:
    def map(self, status_code: int, content: bytes) -> GetMerchantByIdErrorBody:
        match status_code:
            case 404:
                return decode_json[MerchantNotFoundError](content)
            case _:
                return RawError(status_code, content)


get_merchant_by_id_error_mapper: Final[ErrorMapper[GetMerchantByIdErrorBody]] = _GetMerchantByIdError()
