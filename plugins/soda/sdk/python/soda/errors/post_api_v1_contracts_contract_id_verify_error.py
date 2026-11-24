from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse

PostApiV1ContractsContractIdVerifyErrorBody: TypeAlias = ErrorResponse | RawError


@dataclass(frozen=True, slots=True)
class _PostApiV1ContractsContractIdVerifyError:
    def map(self, status_code: int, content: bytes) -> PostApiV1ContractsContractIdVerifyErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return decode_json[ErrorResponse](content)
            case _:
                return RawError(status_code, content)


post_api_v1_contracts_contract_id_verify_error_mapper: Final[
    ErrorMapper[PostApiV1ContractsContractIdVerifyErrorBody]
] = _PostApiV1ContractsContractIdVerifyError()
