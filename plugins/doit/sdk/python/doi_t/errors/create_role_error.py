from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error
from ..models.problem_details import ProblemDetails

CreateRoleErrorBody: TypeAlias = Error | ProblemDetails | RawError


@dataclass(frozen=True, slots=True)
class _CreateRoleError:
    def map(self, status_code: int, content: bytes) -> CreateRoleErrorBody:
        match status_code:
            case 400 | 401 | 403 | 409 | 500:
                return decode_json[Error](content)
            case 422:
                return decode_json[ProblemDetails](content)
            case _:
                return RawError(status_code, content)


create_role_error_mapper: Final[ErrorMapper[CreateRoleErrorBody]] = _CreateRoleError()
