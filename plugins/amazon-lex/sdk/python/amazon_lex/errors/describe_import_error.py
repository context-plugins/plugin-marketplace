from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.internal_server_exception import InternalServerException
from ..models.resource_not_found_exception import ResourceNotFoundException
from ..models.throttling_exception import ThrottlingException
from ..models.validation_exception import ValidationException

DescribeImportErrorBody: TypeAlias = (
    ValidationException | ResourceNotFoundException | ThrottlingException | InternalServerException | RawError
)


@dataclass(frozen=True, slots=True)
class _DescribeImportError:
    def map(self, status_code: int, content: bytes) -> DescribeImportErrorBody:
        match status_code:
            case 400:
                return decode_json[ValidationException](content)
            case 404:
                return decode_json[ResourceNotFoundException](content)
            case 429:
                return decode_json[ThrottlingException](content)
            case 500:
                return decode_json[InternalServerException](content)
            case _:
                return RawError(status_code, content)


describe_import_error_mapper: Final[ErrorMapper[DescribeImportErrorBody]] = _DescribeImportError()
