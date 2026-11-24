from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError:
    def map(self, status_code: int, content: bytes) -> GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_findall_schema_v1_beta_findall_runs_findall_id_schema_get_error_mapper: Final[
    ErrorMapper[GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetErrorBody]
] = _GetFindallSchemaV1BetaFindallRunsFindallIdSchemaGetError()
