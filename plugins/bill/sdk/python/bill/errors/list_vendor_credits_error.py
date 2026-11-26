from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bdc_error import BdcError

ListVendorCreditsErrorBody: TypeAlias = list[BdcError] | RawError


@dataclass(frozen=True, slots=True)
class _ListVendorCreditsError:
    def map(self, status_code: int, content: bytes) -> ListVendorCreditsErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[list[BdcError]](content)
            case code if 500 <= code <= 599:
                return decode_json[list[BdcError]](content)
            case _:
                return RawError(status_code, content)


list_vendor_credits_error_mapper: Final[ErrorMapper[ListVendorCreditsErrorBody]] = _ListVendorCreditsError()
