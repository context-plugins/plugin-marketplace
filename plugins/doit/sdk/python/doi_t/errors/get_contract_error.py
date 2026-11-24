from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetContractErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetContractError:
    def map(self, status_code: int, content: bytes) -> GetContractErrorBody:
        match status_code:
            case 401 | 403 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_contract_error_mapper: Final[ErrorMapper[GetContractErrorBody]] = _GetContractError()
