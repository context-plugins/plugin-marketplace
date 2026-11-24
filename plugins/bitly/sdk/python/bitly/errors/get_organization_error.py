from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetOrganizationErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetOrganizationError:
    def map(self, status_code: int, content: bytes) -> GetOrganizationErrorBody:
        match status_code:
            case 403 | 404 | 500 | 503:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_organization_error_mapper: Final[ErrorMapper[GetOrganizationErrorBody]] = _GetOrganizationError()
