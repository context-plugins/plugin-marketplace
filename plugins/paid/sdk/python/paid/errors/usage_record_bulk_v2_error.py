from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UsageRecordBulkV2ErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UsageRecordBulkV2Error:
    def map(self, status_code: int, content: bytes) -> UsageRecordBulkV2ErrorBody:
        match status_code:
            case 400 | 409:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


usage_record_bulk_v2_error_mapper: Final[ErrorMapper[UsageRecordBulkV2ErrorBody]] = _UsageRecordBulkV2Error()
