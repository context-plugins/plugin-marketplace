from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

UpdateGatewayInformationErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _UpdateGatewayInformationError:
    def map(self, status_code: int, content: bytes) -> UpdateGatewayInformationErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


update_gateway_information_error_mapper: Final[
    ErrorMapper[UpdateGatewayInformationErrorBody]
] = _UpdateGatewayInformationError()
