from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DatasetsAssociationIndexErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DatasetsAssociationIndexError:
    def map(self, status_code: int, content: bytes) -> DatasetsAssociationIndexErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


datasets_association_index_error_mapper: Final[
    ErrorMapper[DatasetsAssociationIndexErrorBody]
] = _DatasetsAssociationIndexError()
