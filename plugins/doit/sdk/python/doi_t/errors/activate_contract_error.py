from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

ActivateContractErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _ActivateContractError:
    def map(self, status_code: int, content: bytes) -> ActivateContractErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404:
                return decode_json[Error](content)
            case 409:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


activate_contract_error_mapper: Final[ErrorMapper[ActivateContractErrorBody]] = _ActivateContractError()
