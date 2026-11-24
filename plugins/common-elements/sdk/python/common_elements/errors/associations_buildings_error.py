from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

AssociationsBuildingsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _AssociationsBuildingsError:
    def map(self, status_code: int, content: bytes) -> AssociationsBuildingsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


associations_buildings_error_mapper: Final[ErrorMapper[AssociationsBuildingsErrorBody]] = _AssociationsBuildingsError()
