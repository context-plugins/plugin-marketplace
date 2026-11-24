from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.access_denied_exception import AccessDeniedException
from ..models.internal_server_exception import InternalServerException
from ..models.resource_not_found_exception import ResourceNotFoundException
from ..models.throttling_exception import ThrottlingException
from ..models.validation_exception import ValidationException

GetCostEstimationErrorBody: TypeAlias = (
    ValidationException
    | AccessDeniedException
    | ResourceNotFoundException
    | ThrottlingException
    | InternalServerException
    | RawError
)


@dataclass(frozen=True, slots=True)
class _GetCostEstimationError:
    def map(self, status_code: int, content: bytes) -> GetCostEstimationErrorBody:
        match status_code:
            case 400:
                return decode_json[ValidationException](content)
            case 403:
                return decode_json[AccessDeniedException](content)
            case 404:
                return decode_json[ResourceNotFoundException](content)
            case 429:
                return decode_json[ThrottlingException](content)
            case 500:
                return decode_json[InternalServerException](content)
            case _:
                return RawError(status_code, content)


get_cost_estimation_error_mapper: Final[ErrorMapper[GetCostEstimationErrorBody]] = _GetCostEstimationError()
