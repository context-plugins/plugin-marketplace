from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

GetApiV1ContractsContractIdVersionsErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _GetApiV1ContractsContractIdVersionsError:
    def map(self, status_code: int, content: bytes) -> GetApiV1ContractsContractIdVersionsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


get_api_v1_contracts_contract_id_versions_error_mapper: Final[
    ErrorMapper[GetApiV1ContractsContractIdVersionsErrorBody]
] = _GetApiV1ContractsContractIdVersionsError()
