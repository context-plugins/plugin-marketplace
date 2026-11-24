from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

UpdateEnvironmentForRepositoryErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _UpdateEnvironmentForRepositoryError:
    def map(self, status_code: int, content: bytes) -> UpdateEnvironmentForRepositoryErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


update_environment_for_repository_error_mapper: Final[
    ErrorMapper[UpdateEnvironmentForRepositoryErrorBody]
] = _UpdateEnvironmentForRepositoryError()
