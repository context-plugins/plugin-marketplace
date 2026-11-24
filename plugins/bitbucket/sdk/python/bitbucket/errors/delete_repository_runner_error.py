from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteRepositoryRunnerErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteRepositoryRunnerError:
    def map(self, status_code: int, content: bytes) -> DeleteRepositoryRunnerErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_repository_runner_error_mapper: Final[
    ErrorMapper[DeleteRepositoryRunnerErrorBody]
] = _DeleteRepositoryRunnerError()
