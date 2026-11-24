from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateRepositoryRunnerErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateRepositoryRunnerError:
    def map(self, status_code: int, content: bytes) -> CreateRepositoryRunnerErrorBody:
        match status_code:
            case 400 | 409:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_repository_runner_error_mapper: Final[
    ErrorMapper[CreateRepositoryRunnerErrorBody]
] = _CreateRepositoryRunnerError()
