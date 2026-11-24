from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteEnvironmentForRepositoryErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteEnvironmentForRepositoryError:
    def map(self, status_code: int, content: bytes) -> DeleteEnvironmentForRepositoryErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_environment_for_repository_error_mapper: Final[
    ErrorMapper[DeleteEnvironmentForRepositoryErrorBody]
] = _DeleteEnvironmentForRepositoryError()
