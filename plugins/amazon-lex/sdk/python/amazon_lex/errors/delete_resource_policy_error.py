from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.internal_server_exception import InternalServerException
from ..models.precondition_failed_exception import PreconditionFailedException
from ..models.resource_not_found_exception import ResourceNotFoundException
from ..models.throttling_exception import ThrottlingException

DeleteResourcePolicyErrorBody: TypeAlias = (
    ResourceNotFoundException | PreconditionFailedException | ThrottlingException | InternalServerException | RawError
)


@dataclass(frozen=True, slots=True)
class _DeleteResourcePolicyError:
    def map(self, status_code: int, content: bytes) -> DeleteResourcePolicyErrorBody:
        match status_code:
            case 404:
                return decode_json[ResourceNotFoundException](content)
            case 412:
                return decode_json[PreconditionFailedException](content)
            case 429:
                return decode_json[ThrottlingException](content)
            case 500:
                return decode_json[InternalServerException](content)
            case _:
                return RawError(status_code, content)


delete_resource_policy_error_mapper: Final[ErrorMapper[DeleteResourcePolicyErrorBody]] = _DeleteResourcePolicyError()
