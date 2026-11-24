from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateBitlinksByGroupErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateBitlinksByGroupError:
    def map(self, status_code: int, content: bytes) -> UpdateBitlinksByGroupErrorBody:
        match status_code:
            case 400 | 403 | 404 | 422 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_bitlinks_by_group_error_mapper: Final[
    ErrorMapper[UpdateBitlinksByGroupErrorBody]
] = _UpdateBitlinksByGroupError()
