from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteWorkspaceRunnerErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteWorkspaceRunnerError:
    def map(self, status_code: int, content: bytes) -> DeleteWorkspaceRunnerErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_workspace_runner_error_mapper: Final[ErrorMapper[DeleteWorkspaceRunnerErrorBody]] = _DeleteWorkspaceRunnerError()
