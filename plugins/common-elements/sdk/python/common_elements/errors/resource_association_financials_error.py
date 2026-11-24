from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ResourceAssociationFinancialsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ResourceAssociationFinancialsError:
    def map(self, status_code: int, content: bytes) -> ResourceAssociationFinancialsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


resource_association_financials_error_mapper: Final[
    ErrorMapper[ResourceAssociationFinancialsErrorBody]
] = _ResourceAssociationFinancialsError()
