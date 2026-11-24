from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

CreateDeploymentErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _CreateDeploymentError:
    def map(self, status_code: int, content: bytes) -> CreateDeploymentErrorBody:
        match status_code:
            case 400 | 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


create_deployment_error_mapper: Final[ErrorMapper[CreateDeploymentErrorBody]] = _CreateDeploymentError()
