from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetEnvironmentForRepositoryErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetEnvironmentForRepositoryError:
    def map(self, status_code: int, content: bytes) -> GetEnvironmentForRepositoryErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_environment_for_repository_error_mapper: Final[
    ErrorMapper[GetEnvironmentForRepositoryErrorBody]
] = _GetEnvironmentForRepositoryError()
