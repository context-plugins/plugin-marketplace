from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.payment_required1 import PaymentRequired1

SaplingDeleteCustomMappingErrorBody: TypeAlias = Error | PaymentRequired1 | RawError


@dataclass(frozen=True, slots=True)
class _SaplingDeleteCustomMappingError:
    def map(self, status_code: int, content: bytes) -> SaplingDeleteCustomMappingErrorBody:
        match status_code:
            case 400 | 401 | 403 | 500:
                return decode_json[Error](content)
            case 402:
                return decode_json[PaymentRequired1](content)
            case _:
                return RawError(status_code, content)


sapling_delete_custom_mapping_error_mapper: Final[
    ErrorMapper[SaplingDeleteCustomMappingErrorBody]
] = _SaplingDeleteCustomMappingError()
