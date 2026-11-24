from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ResourceAssociationPermitsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ResourceAssociationPermitsError:
    def map(self, status_code: int, content: bytes) -> ResourceAssociationPermitsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


resource_association_permits_error_mapper: Final[
    ErrorMapper[ResourceAssociationPermitsErrorBody]
] = _ResourceAssociationPermitsError()
