from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetGroupCodeScansByCountryErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetGroupCodeScansByCountryError:
    def map(self, status_code: int, content: bytes) -> GetGroupCodeScansByCountryErrorBody:
        match status_code:
            case 400 | 403 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_group_code_scans_by_country_error_mapper: Final[
    ErrorMapper[GetGroupCodeScansByCountryErrorBody]
] = _GetGroupCodeScansByCountryError()
