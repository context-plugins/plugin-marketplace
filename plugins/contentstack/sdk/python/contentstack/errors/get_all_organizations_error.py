from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error2 import Error2

GetAllOrganizationsErrorBody: TypeAlias = Error2 | RawError


@dataclass(frozen=True, slots=True)
class _GetAllOrganizationsError:
    def map(self, status_code: int, content: bytes) -> GetAllOrganizationsErrorBody:
        match status_code:
            case 401:
                return decode_json[Error2](content)
            case _:
                return RawError(status_code, content)


get_all_organizations_error_mapper: Final[ErrorMapper[GetAllOrganizationsErrorBody]] = _GetAllOrganizationsError()
