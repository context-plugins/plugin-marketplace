from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.enums.internal_server_error import InternalServerErrorOrStr

RunFlowErrorBody: TypeAlias = InternalServerErrorOrStr | RawError


@dataclass(frozen=True, slots=True)
class _RunFlowError:
    def map(self, status_code: int, content: bytes) -> RunFlowErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return RawError(status_code, content)
            case 500:
                return decode_json[InternalServerErrorOrStr](content)
            case _:
                return RawError(status_code, content)


run_flow_error_mapper: Final[ErrorMapper[RunFlowErrorBody]] = _RunFlowError()
