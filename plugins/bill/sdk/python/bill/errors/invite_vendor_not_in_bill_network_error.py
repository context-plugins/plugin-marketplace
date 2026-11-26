from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.bdc_error import BdcError

InviteVendorNotInBillNetworkErrorBody: TypeAlias = list[BdcError] | RawError


@dataclass(frozen=True, slots=True)
class _InviteVendorNotInBillNetworkError:
    def map(self, status_code: int, content: bytes) -> InviteVendorNotInBillNetworkErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[list[BdcError]](content)
            case code if 500 <= code <= 599:
                return decode_json[list[BdcError]](content)
            case _:
                return RawError(status_code, content)


invite_vendor_not_in_bill_network_error_mapper: Final[
    ErrorMapper[InviteVendorNotInBillNetworkErrorBody]
] = _InviteVendorNotInBillNetworkError()
