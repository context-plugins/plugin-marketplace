from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.internal_server_exception import InternalServerException
from ..models.resource_not_found_exception import ResourceNotFoundException
from ..models.service_quota_exceeded_exception import ServiceQuotaExceededException
from ..models.throttling_exception import ThrottlingException
from ..models.validation_exception import ValidationException

DescribeBotVersionErrorBody: TypeAlias = (
    ValidationException
    | ServiceQuotaExceededException
    | ResourceNotFoundException
    | ThrottlingException
    | InternalServerException
    | RawError
)


@dataclass(frozen=True, slots=True)
class _DescribeBotVersionError:
    def map(self, status_code: int, content: bytes) -> DescribeBotVersionErrorBody:
        match status_code:
            case 400:
                return decode_json[ValidationException](content)
            case 402:
                return decode_json[ServiceQuotaExceededException](content)
            case 404:
                return decode_json[ResourceNotFoundException](content)
            case 429:
                return decode_json[ThrottlingException](content)
            case 500:
                return decode_json[InternalServerException](content)
            case _:
                return RawError(status_code, content)


describe_bot_version_error_mapper: Final[ErrorMapper[DescribeBotVersionErrorBody]] = _DescribeBotVersionError()
