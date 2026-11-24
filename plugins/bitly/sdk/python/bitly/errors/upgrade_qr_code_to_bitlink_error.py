from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.simplified_error import SimplifiedError

UpgradeQrCodeToBitlinkErrorBody: TypeAlias = Error | SimplifiedError | RawError


@dataclass(frozen=True, slots=True)
class _UpgradeQrCodeToBitlinkError:
    def map(self, status_code: int, content: bytes) -> UpgradeQrCodeToBitlinkErrorBody:
        match status_code:
            case 400 | 403 | 404 | 500:
                return decode_json[Error](content)
            case 429:
                return decode_json[SimplifiedError](content)
            case _:
                return RawError(status_code, content)


upgrade_qr_code_to_bitlink_error_mapper: Final[
    ErrorMapper[UpgradeQrCodeToBitlinkErrorBody]
] = _UpgradeQrCodeToBitlinkError()
